"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  cn,
  useDisclosure,
} from "@nextui-org/react";
import TimeAgo from "react-timeago";

import {
  DeleteDocumentIcon,
  EditDocumentIcon,
  LockIcon,
  VerticalDotsIcon,
} from "@/components/icons";
import DeleteRunnerModal from "@/components/functions/runner/delete";
import ChangeRunnerStatusModal from "@/components/functions/runner/changeStatus";

export function SelfHostedRunnerList({ runners, projects }: any) {
  const [status, setStatus] = React.useState(false);
  const [targetRunner, setTargetRunner] = React.useState({} as any);
  const changeStatusModal = useDisclosure();
  const deleteRunnerModal = useDisclosure();

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  function heartbeatColor(runner: any) {
    var timeAgo =
      (new Date(runner.last_heartbeat).getTime() - Date.now()) / 1000;

    if (timeAgo < 0 && timeAgo > -30) {
      return "success";
    } else if (timeAgo <= -30 && timeAgo > -60) {
      return "warning";
    } else if (timeAgo <= -60) {
      return "danger";
    }
  }

  const renderCell = React.useCallback((runner: any, columnKey: any) => {
    const cellValue = runner[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <div>
            <p>{runner.name}</p>
            <p className="text-xs text-default-400">{runner.id}</p>
          </div>
        );
      case "project":
        return (
          <div>
            <p>{projects.find((p: any) => p.id === runner.project_id).name}</p>
            <p className="text-xs text-default-400">{runner.project_id}</p>
          </div>
        );
      case "registered":
        return (
          <Chip color={runner.registered ? "success" : "danger"} variant="dot">
            {runner.registered ? "Registered" : "Unregistered"}
          </Chip>
        );
      case "status":
        return (
          <div>
            <Chip
              className="capitalize"
              color={runner.disabled ? "danger" : "success"}
              radius="sm"
              size="sm"
              variant="flat"
            >
              {runner.disabled ? "Disabled" : "Active"}
            </Chip>
            {runner.disabled && (
              <p className="text-sm text-default-400">
                {runner.disabled_reason}
              </p>
            )}
          </div>
        );
      case "executing_job":
        return (
          <Chip
            color={runner.executing_job ? "primary" : "default"}
            variant="dot"
          >
            {runner.executing_job ? "Active" : "Idle"}
          </Chip>
        );
      case "last_heartbeat":
        return (
          <p className={"text-" + heartbeatColor(runner)}>
            {runner.last_heartbeat !== "0001-01-01T00:00:00Z" && (
              <TimeAgo date={runner.last_heartbeat} />
            )}
            {runner.last_heartbeat === "0001-01-01T00:00:00Z" && "N/A"}
          </p>
        );
      case "functions":
        return (
          <div>
            <p className="text-sm text-default-500">
              Actions: {runner.available_actions.length}
            </p>
            <p className="text-sm text-default-500">
              Payload Injectors: {runner.available_payload_injectors.length}
            </p>
          </div>
        );
      case "runner_version":
        return <p>{runner.runner_version ? runner.runner_version : "N/A"}</p>;
      case "actions":
        return (
          <div className="relative flex justify-center items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded">
                <DropdownSection showDivider title="Edit Zone">
                  <DropdownItem
                    key="edit"
                    className="text-warning"
                    color="warning"
                    description="Apply changes to this project"
                    startContent={
                      <EditDocumentIcon
                        className={cn(iconClasses, "text-warning")}
                      />
                    }
                  >
                    Edit
                  </DropdownItem>
                  {runner.disabled ? (
                    <DropdownItem
                      key="disable"
                      className="text-success"
                      color="success"
                      description="Enable runner"
                      startContent={
                        <LockIcon className={cn(iconClasses, "text-success")} />
                      }
                      onClick={() => {
                        setTargetRunner(runner);
                        setStatus(false);
                        changeStatusModal.onOpen();
                      }}
                    >
                      Enable
                    </DropdownItem>
                  ) : (
                    <DropdownItem
                      key="disable"
                      className="text-danger"
                      color="danger"
                      description="Disable runner"
                      startContent={
                        <LockIcon className={cn(iconClasses, "text-danger")} />
                      }
                      onClick={() => {
                        setTargetRunner(runner);
                        setStatus(true);
                        changeStatusModal.onOpen();
                      }}
                    >
                      Disable
                    </DropdownItem>
                  )}
                </DropdownSection>
                <DropdownSection title="Danger Zone">
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    description="Permanently delete this project"
                    startContent={
                      <DeleteDocumentIcon
                        className={cn(iconClasses, "text-danger")}
                      />
                    }
                    onClick={() => {
                      setTargetRunner(runner);
                      deleteRunnerModal.onOpen();
                    }}
                  >
                    Delete
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <main>
      <p className="text-2xl font-bold mb-0 text-secondary mb-2">
        Self-Hosted Runners
      </p>
      <div>
        <Table aria-label="Example table with custom cells">
          <TableHeader>
            <TableColumn key="name" align="start">
              NAME
            </TableColumn>
            <TableColumn key="runner_version" align="start">
              VERSION
            </TableColumn>
            <TableColumn key="project" align="start">
              PROJECT
            </TableColumn>
            <TableColumn key="status" align="start">
              STATUS
            </TableColumn>
            <TableColumn key="registered" align="start">
              REGISTERED
            </TableColumn>
            <TableColumn key="executing_job" align="start">
              EXECUTING JOB
            </TableColumn>
            <TableColumn key="last_heartbeat" align="start">
              LAST HEARTBEAT
            </TableColumn>
            <TableColumn key="functions" align="start">
              FUNCTIONS
            </TableColumn>
            <TableColumn key="actions" align="center">
              ACTIONS
            </TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No rows to display."} items={runners}>
            {(item: any) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <ChangeRunnerStatusModal
        disclosure={changeStatusModal}
        runner={targetRunner}
        status={status}
      />
      <DeleteRunnerModal disclosure={deleteRunnerModal} runner={targetRunner} />
    </main>
  );
}
