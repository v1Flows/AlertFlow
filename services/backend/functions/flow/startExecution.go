package functions

import (
	"context"

	"github.com/v1Flows/alertFlow/services/backend/pkg/models"

	"github.com/google/uuid"
	"github.com/uptrace/bun"
)

func StartExecution(flowID string, alertID uuid.UUID, flow models.Flows, db *bun.DB) error {
	context := context.Background()
	var execution models.Executions

	if flow.RunnerID != "" {
		execution.RunnerID = flow.RunnerID
	}

	execution.FlowID = flowID
	execution.AlertID = alertID.String()
	execution.Status = "pending"
	_, err := db.NewInsert().Model(&execution).Column("flow_id", "alert_id", "status", "executed_at").Exec(context)
	if err != nil {
		return err
	}

	return nil
}
