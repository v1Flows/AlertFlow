package models

import (
	shared_models "github.com/v1Flows/shared-library/pkg/models"
)

type Executions struct {
	shared_models.Executions
	AlertID string `bun:"alert_id,type:text,default:''" json:"alert_id"`
}
