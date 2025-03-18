package executions

import (
	"net/http"

	"github.com/v1Flows/alertFlow/services/backend/functions/httperror"
	"github.com/v1Flows/alertFlow/services/backend/pkg/models"

	"github.com/gin-gonic/gin"
	"github.com/uptrace/bun"
)

func Update(context *gin.Context, db *bun.DB) {
	executionID := context.Param("executionID")

	var execution models.Executions
	if err := context.ShouldBindJSON(&execution); err != nil {
		httperror.StatusBadRequest(context, "Error parsing incoming data", err)
		return
	}

	_, err := db.NewUpdate().Model(&execution).Where("id = ?", executionID).ExcludeColumn("alert_id").Exec(context)
	if err != nil {
		httperror.InternalServerError(context, "Error updating execution data on db", err)
		return
	}

	context.JSON(http.StatusOK, gin.H{"result": "success"})
}
