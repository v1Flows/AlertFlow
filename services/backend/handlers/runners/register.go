package runners

import (
	"alertflow-backend/functions/auth"
	"alertflow-backend/functions/httperror"
	"alertflow-backend/models"
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/uptrace/bun"
)

func RegisterRunner(context *gin.Context, db *bun.DB) {
	runnerID, projectID, runnerType, err := auth.GetRunnerDataFromToken(context.GetHeader("Authorization"))
	if err != nil {
		httperror.Unauthorized(context, "Error receiving userID from token", err)
		return
	}

	var runner models.Runners
	var autoRunner models.IncomingAutoRunners

	if runnerType == "project_auto_runner" {
		if err := context.ShouldBindJSON(&autoRunner); err != nil {
			httperror.StatusBadRequest(context, "Error parsing incoming data", err)
			return
		}

		autoRunnerRegister(projectID, models.Runners{
			Registered:       autoRunner.Registered,
			LastHeartbeat:    autoRunner.LastHeartbeat,
			Version:          autoRunner.Version,
			Mode:             autoRunner.Mode,
			Plugins:          autoRunner.Plugins,
			Actions:          autoRunner.Actions,
			PayloadEndpoints: autoRunner.PayloadEndpoints,
		}, context, db)
	} else {
		if err := context.ShouldBindJSON(&runner); err != nil {
			httperror.StatusBadRequest(context, "Error parsing incoming data", err)
			return
		}

		runnerRegister(runnerID, projectID, runner, context, db)
	}
}

func runnerRegister(runnerID string, projectID string, runner models.Runners, context *gin.Context, db *bun.DB) {
	// check if runnerID matches with runner id from body
	if runnerID != runner.ID.String() {
		httperror.StatusBadRequest(context, "Runner ID does not match with token", errors.New("runner ID does not match with token"))
		return
	}

	// check if runner is disabled
	var runnerDB models.Runners
	err := db.NewSelect().Model(&runnerDB).Where("id = ?", runnerID).Scan(context)
	if err != nil {
		httperror.InternalServerError(context, "Error collecting runner data from db", err)
		return
	}
	if runnerDB.Disabled {
		httperror.StatusBadRequest(context, "Runner is disabled", errors.New("runner is disabled"))
		return
	}

	// check if runner join is disabled for project
	var project models.Projects
	err = db.NewSelect().Model(&project).Where("id = ?", projectID).Scan(context)
	if err != nil {
		httperror.InternalServerError(context, "Error collecting project data from db", err)
		return
	}

	if project.DisableRunnerJoin && !runnerDB.Registered {
		httperror.StatusBadRequest(context, "Runner join is disabled for this project", errors.New("runner join is disabled for this project"))
		return
	}

	_, err = db.NewUpdate().Model(&runner).Column("registered", "last_heartbeat", "version", "mode", "plugins", "actions", "payload_endpoints").Where("id = ?", runnerID).Exec(context)
	if err != nil {
		httperror.InternalServerError(context, "Error updating runner informations on db", err)
		return
	}

	context.JSON(http.StatusCreated, gin.H{"result": "success"})
}

func autoRunnerRegister(projectID string, runner models.Runners, context *gin.Context, db *bun.DB) {
	// check if runner join is disabled for project
	var project models.Projects
	err := db.NewSelect().Model(&project).Where("id = ?", projectID).Scan(context)
	if err != nil {
		httperror.InternalServerError(context, "Error collecting project data from db", err)
		return
	}

	// check if auto runners is disabled for project
	if !project.EnableAutoRunners {
		httperror.StatusBadRequest(context, "Auto runner join is disabled for this project", errors.New("auto runner join is disabled for this project"))
		return
	}

	if project.DisableRunnerJoin {
		httperror.StatusBadRequest(context, "Runner join is not disabled for this project", errors.New("runner join is not disabled for this project"))
		return
	}

	// generate random id for runner
	runner.ID = uuid.New()
	runner.Name = runner.ID.String() + "_auto_runner"
	runner.ProjectID = projectID
	runner.AutoRunner = true

	_, err = db.NewInsert().Model(&runner).Exec(context)
	if err != nil {
		httperror.InternalServerError(context, "Error inserting auto runner to db", err)
		return
	}

	context.JSON(http.StatusCreated, gin.H{"result": "success", "runner_id": runner.ID})
}
