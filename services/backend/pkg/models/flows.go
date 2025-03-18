package models

import (
	shared_models "github.com/v1Flows/shared-library/pkg/models"
)

type Flows struct {
	shared_models.Flows
	Patterns              []Pattern `bun:"type:jsonb,default:jsonb('[]')" json:"patterns"`
	EncryptAlerts         bool      `bun:"encrypt_alerts,type:bool,default:true" json:"encrypt_alerts"`
	GroupAlerts           bool      `bun:"group_alerts,type:bool,default:true" json:"group_alerts"`
	GroupAlertsIdentifier string    `bun:"group_alerts_identifier,type:text,default:''" json:"group_alerts_identifier"`
	AlertThreshold        int       `bun:"alert_threshold,type:int,default:0" json:"alert_threshold"`
}

type Pattern struct {
	Key   string `json:"key"`
	Value string `json:"value"`
	Type  string `json:"type"`
}
