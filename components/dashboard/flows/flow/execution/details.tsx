import { Icon } from "@iconify/react";
import { Card, CardBody, CircularProgress, Tooltip } from "@nextui-org/react";
import ReactTimeago from "react-timeago";

export default function ExecutionDetails({ execution, steps }: any) {
  function status(execution: any) {
    if (execution.running) {
      return "Running";
    } else if (execution.waiting) {
      return "Waiting";
    } else if (execution.paused) {
      return "Paused";
    } else if (execution.error) {
      return "Error";
    } else if (execution.no_match) {
      return "No Match";
    } else {
      return "Finished";
    }
  }

  function statusColor(execution: any) {
    if (execution.running) {
      return "primary";
    } else if (execution.waiting) {
      return "warning";
    } else if (execution.paused) {
      return "warning";
    } else if (execution.error) {
      return "danger";
    } else if (execution.no_match) {
      return "secondary";
    } else {
      return "success";
    }
  }

  function statusIcon(execution: any) {
    if (execution.running) {
      return (
        <Tooltip content={`${status(execution)}`}>
          <CircularProgress aria-label="Step" color="primary" size="md" />
        </Tooltip>
      );
    } else if (execution.waiting) {
      return (
        <Tooltip content={`${status(execution)}`}>
          <CircularProgress
            aria-label="Step"
            color="warning"
            maxValue={5}
            showValueLabel={true}
            size="md"
            value={5}
            valueLabel={
              <Icon
                className="text-warning"
                icon="solar:pause-broken"
                width={16}
              />
            }
          />
        </Tooltip>
      );
    } else if (execution.paused) {
      return <CircularProgress color="warning" size="sm" value={100} />;
    } else if (execution.error) {
      return <CircularProgress color="danger" size="sm" value={100} />;
    } else if (execution.no_match) {
      return <CircularProgress color="secondary" size="sm" value={100} />;
    } else {
      return (
        <Tooltip content={`${status(execution)}. Steps 5 / 5`}>
          <CircularProgress
            aria-label="Step"
            color="success"
            maxValue={5}
            showValueLabel={true}
            size="md"
            value={5}
            valueLabel={
              <Icon
                className="text-success"
                icon="solar:check-read-broken"
                width={22}
              />
            }
          />
        </Tooltip>
      );
    }
  }

  function getDuration(execution: any) {
    if (execution.finished_at === "0001-01-01T00:00:00Z") return "-";
    const ms =
      new Date(execution.finished_at).getTime() -
      new Date(execution.executed_at).getTime();
    const sec = Math.floor(ms / 1000);
    const min = Math.floor(sec / 60);
    const hr = Math.floor(min / 60);
    const day = Math.floor(hr / 24);

    if (day > 0) {
      return `${day}d ${hr % 24}h ${min % 60}m ${sec % 60}s`;
    } else if (hr > 0) {
      return `${hr}h ${min % 60}m ${sec % 60}s`;
    } else if (min > 0) {
      return `${min}m ${sec % 60}s`;
    } else {
      return `${sec}s`;
    }
  }

  return (
    <>
      <div className="grid lg:grid-cols-5 grid-cols-2 items-start gap-4">
        <Card>
          <CardBody>
            <div className="flex gap-4 items-center justify-start">
              <div>{statusIcon(execution)}</div>
              <div>
                <p className="text-default-600">Status</p>
                <p
                  className={`text-lg font-bold text-${statusColor(execution)}`}
                >
                  {status(execution)}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex gap-4 items-center justify-start">
              <div className="flex items-center rounded-large justify-center bg-default bg-opacity-40 w-10 h-10">
                <Icon icon="solar:bill-list-broken" width={24} />
              </div>
              <div>
                <p className="text-default-600">Total Steps</p>
                <p className="text-lg font-bold">{steps.length + 2}</p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex gap-4 items-center justify-start">
              <div className="flex items-center rounded-large justify-center bg-default bg-opacity-40 w-12 h-12">
                <Icon icon="solar:delivery-line-duotone" width={28} />
              </div>
              <div>
                <p className="text-default-600">Executed At</p>
                <p className="text-lg font-bold">
                  <ReactTimeago date={execution.executed_at} />
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex gap-4 items-center justify-start">
              <div className="flex items-center rounded-large justify-center bg-default bg-opacity-40 w-12 h-12">
                <Icon icon="solar:delivery-outline" width={28} />
              </div>
              <div>
                <p className="text-default-600">Finished At</p>
                <p className="text-lg font-bold">
                  {execution.finished_at != "0001-01-01T00:00:00Z" ? (
                    <ReactTimeago date={execution.finished_at} />
                  ) : (
                    "N/A"
                  )}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex gap-4 items-center justify-start">
              <div className="flex items-center rounded-large justify-center bg-default bg-opacity-40 w-12 h-12">
                <Icon icon="solar:clock-circle-broken" width={28} />
              </div>
              <div>
                <p className="text-default-600">Duration</p>
                <p className="text-lg font-bold">{getDuration(execution)}</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
