package models

import (
	"time"

	"github.com/google/uuid"
	"github.com/uptrace/bun"
)

type Runners struct {
	bun.BaseModel `bun:"table:runners"`

	ID                 uuid.UUID        `bun:",pk,type:uuid,default:gen_random_uuid()" json:"id"`
	Name               string           `bun:"name,type:text,notnull" json:"name"`
	Registered         bool             `bun:"registered,type:bool,default:false" json:"registered"`
	ProjectID          string           `bun:"project_id,type:text,default:''" json:"project_id"`
	Version            string           `bun:"version,type:text,default:''" json:"version"`
	Mode               string           `bun:"mode,type:text,default:''" json:"mode"`
	AutoRunner         bool             `bun:"auto_runner,type:bool,default:false" json:"auto_runner"`
	AlertFlowRunner    bool             `bun:"alertflow_runner,type:bool,default:false" json:"alertflow_runner"`
	LastHeartbeat      time.Time        `bun:"last_heartbeat,type:timestamptz" json:"last_heartbeat"`
	ExecutingJob       bool             `bun:"executing_job,type:bool,default:false" json:"executing_job"`
	Disabled           bool             `bun:"disabled,type:bool,default:false" json:"disabled"`
	DisabledReason     string           `bun:"disabled_reason,type:text,default:''" json:"disabled_reason"`
	Plugins            []Plugins        `bun:"plugins,type:jsonb,default:jsonb('[]')" json:"plugins"`
	Actions            []Actions        `bun:"actions,type:jsonb,default:jsonb('[]')" json:"actions"`
	AlertEndpoints     []AlertEndpoints `bun:"alert_endpoints,type:jsonb,default:jsonb('[]')" json:"alert_endpoints"`
	RegisteredAt       time.Time        `bun:"registered_at,type:timestamptz,default:now()" json:"registered_at"`
	ExecutedExecutions []string         `bun:"executed_executions,type:text[],default:'{}'" json:"executed_executions"`
}

type IncomingAutoRunners struct {
	Registered     bool             `bun:"registered,type:bool,default:false" json:"registered"`
	Version        string           `bun:"version,type:text,default:''" json:"version"`
	Mode           string           `bun:"mode,type:text,default:''" json:"mode"`
	LastHeartbeat  time.Time        `bun:"last_heartbeat,type:timestamptz" json:"last_heartbeat"`
	Plugins        []Plugins        `bun:"plugins,type:jsonb,default:jsonb('[]')" json:"plugins"`
	Actions        []Actions        `bun:"actions,type:jsonb,default:jsonb('[]')" json:"actions"`
	AlertEndpoints []AlertEndpoints `bun:"alert_endpoints,type:jsonb,default:jsonb('[]')" json:"alert_endpoints"`
}

type Plugins struct {
	Name      string         `json:"name"`
	Type      string         `json:"type"`
	Version   string         `json:"version"`
	Author    string         `json:"author"`
	Actions   Actions        `json:"actions"`
	Endpoints AlertEndpoints `json:"endpoints"`
}
