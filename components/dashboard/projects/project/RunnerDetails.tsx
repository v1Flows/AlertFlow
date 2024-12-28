import {
  Button,
  Card,
  CardBody,
  Spacer,
  Switch,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

import { PlusIcon } from "@/components/icons";
import CreateRunnerModal from "@/components/functions/runner/create";
import UpdateProject from "@/lib/fetch/project/PUT/UpdateProject";

export default function ProjectRunnerDetails({ project }: { project: any }) {
  const router = useRouter();

  const addRunnerModal = useDisclosure();

  const [alertflowRunners, setAlertflowRunners] = useState(
    project.alertflow_runners,
  );
  const [autoJoin, setAutoJoin] = useState(project.enable_auto_runners);
  const [disableJoin, setDisableJoin] = useState(project.disable_runner_join);

  useEffect(() => {
    setAlertflowRunners(project.alertflow_runners);
    setAutoJoin(project.enable_auto_runners);
    setDisableJoin(project.disable_runner_join);
  }, [project]);

  useEffect(() => {
    if (
      alertflowRunners === project.alertflow_runners &&
      autoJoin === project.enable_auto_runners &&
      disableJoin === project.disable_runner_join
    ) {
      return;
    }
    updateProject();
  }, [alertflowRunners, autoJoin, disableJoin]);

  async function updateProject() {
    const response = (await UpdateProject(
      project.id,
      project.name,
      project.description,
      alertflowRunners,
      project.icon,
      project.color,
      autoJoin,
      disableJoin,
    )) as any;

    if (!response) {
      toast.error("Failed to update project");

      return;
    }

    if (response.success) {
      router.refresh();
      toast.success("Project updated successfully");
    } else {
      toast.error("Failed to update project");
    }
  }

  function copyJoinSecret() {
    navigator.clipboard.writeText(project.runner_join_secret);
    toast.success("Join secret copied to clipboard");
  }

  return (
    <>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
        <Card fullWidth>
          <CardBody className="flex items-center justify-between text-center">
            <div className="flex flex-col">
              <p className="text-md font-bold">AlertFlow Runners</p>
              <p className="text-sm text-default-500">
                Use Runners from the official AlertFlow Runner Pool
              </p>
            </div>
            <Spacer y={2} />
            <Switch
              isSelected={alertflowRunners}
              size="sm"
              onValueChange={(value) => {
                setAlertflowRunners(value);
              }}
            />
          </CardBody>
        </Card>

        <Card fullWidth>
          <CardBody className="flex items-center justify-between text-center">
            <div className="flex flex-col">
              <div className="flex flex-cols items-center justify-center gap-2">
                <p className="text-md font-bold">Auto Join</p>
                <Tooltip content="You have to configure the projects runner join secret in your runner configuration">
                  <Icon icon="solar:info-circle-linear" />
                </Tooltip>
              </div>
              <p className="text-sm text-default-500">
                Runners on scalable infrastructure can automatically join
              </p>
            </div>
            <Spacer y={2} />
            <Switch
              isSelected={autoJoin}
              size="sm"
              onValueChange={setAutoJoin}
            />
          </CardBody>
        </Card>

        <Card fullWidth>
          <CardBody className="flex items-center justify-between text-center">
            <div className="flex flex-col">
              <p className="text-md font-bold">Disable Join</p>
              <p className="text-sm text-default-500">
                Disable new runners from joining
              </p>
            </div>
            <Spacer y={2} />
            <Switch
              color="danger"
              isSelected={disableJoin}
              size="sm"
              onValueChange={setDisableJoin}
            />
          </CardBody>
        </Card>

        <Card fullWidth>
          <CardBody className="flex items-center justify-between text-center">
            <div className="flex flex-col">
              <p className="text-md font-bold">Join Secret</p>
              <p className="text-sm text-default-500">
                Use this secret in your runner configuration to allow auto join
              </p>
            </div>
            <Spacer y={2} />
            <Button
              color="primary"
              size="sm"
              variant="flat"
              onPress={copyJoinSecret}
            >
              <Icon icon="solar:copy-linear" />
              Copy Secret
            </Button>
          </CardBody>
        </Card>

        <Card fullWidth>
          <CardBody className="flex items-center justify-between text-center">
            <div className="flex flex-col">
              <p className="text-md font-bold">Add Persistent Runner</p>
              <p className="text-sm text-default-500">
                Add a new self-hosted runner which is persistent to this project
              </p>
            </div>
            <Spacer y={2} />
            <Button
              isIconOnly
              color="primary"
              isDisabled={disableJoin}
              size="sm"
              variant="flat"
              onPress={addRunnerModal.onOpen}
            >
              <PlusIcon />
            </Button>
          </CardBody>
        </Card>
      </div>
      <CreateRunnerModal
        alertflow_runner={false}
        disclosure={addRunnerModal}
        project={project}
      />
    </>
  );
}
