package models

import (
	"encoding/json"
	"time"

	"github.com/google/uuid"
	"github.com/uptrace/bun"
)

type Alerts struct {
	bun.BaseModel `bun:"table:alerts"`

	ID            uuid.UUID       `bun:",pk,type:uuid,default:gen_random_uuid()" json:"id"`
	Name          string          `bun:"alert_name,type:text,default:''" json:"alert_name"`
	Status        string          `bun:"status,type:text,default:''" json:"status"`
	Affected      []string        `bun:"affected,type:jsonb,default:jsonb('[]')" json:"affected"`
	GroupedAlerts []GroupedAlert  `bun:"grouped_alerts,type:jsonb,default:jsonb('[]')" json:"grouped_alerts"`
	Payload       json.RawMessage `bun:"payload,type:jsonb,default:jsonb('[]')" json:"payload"`
	Origin        string          `bun:"origin,type:text,default:''" json:"origin"`
	FlowID        string          `bun:"flow_id,type:text,default:''" json:"flow_id"`
	ExecutionID   string          `bun:"execution_id,type:text,default:''" json:"execution_id"`
	RunnerID      string          `bun:"runner_id,type:text,default:''" json:"runner_id"`
	Plugin        string          `bun:"endpoint,type:text,default:''" json:"endpoint"`
	Encrypted     bool            `bun:"encrypted,type:bool,default:false" json:"encrypted"`
	StartedAt     time.Time       `bun:"started_at,type:timestamptz" json:"started_at"`
	EndedAt       time.Time       `bun:"ended_at,type:timestamptz" json:"ended_at"`
	CreatedAt     time.Time       `bun:"created_at,type:timestamptz,default:now()" json:"created_at"`
}

type AlertEndpoints struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Endpoint string `json:"endpoint"`
	Icon     string `json:"icon"`
	Color    string `json:"color"`
}

type GroupedAlert struct {
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Status      string    `json:"status"`
	Affected    []string  `json:"affected"`
	StartedAt   time.Time `json:"started_at"`
	EndedAt     time.Time `json:"ended_at"`
}
