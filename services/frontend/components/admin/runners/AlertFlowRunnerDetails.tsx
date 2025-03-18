import {
  addToast,
  Button,
  Card,
  CardBody,
  Spacer,
  Switch,
  Tooltip,
  useDisclosure,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

import { PlusIcon } from "@/components/icons";
import CreateRunnerModal from "@/components/functions/runner/create";
import UpdateSettings from "@/lib/fetch/admin/PUT/UpdateSettings";

export default function AdminSharedRunnerDetails({
  settings,
}: {
  settings: any;
}) {
  const router = useRouter();

  const addRunnerModal = useDisclosure();

  const [allowSharedRunnerAutoJoin, setAllowSharedRunnerAutoJoin] = useState(
    settings.allow_shared_runner_auto_join,
  );
  const [allowSharedRunnerJoin, setAllowSharedRunnerJoin] = useState(
    settings.allow_shared_runner_join,
  );
  const [sharedRunnerAutoJoinToken, setSharedRunnerAutoJoinToken] = useState(
    settings.shared_runner_auto_join_token,
  );

  useEffect(() => {
    setAllowSharedRunnerAutoJoin(settings.allow_shared_runner_auto_join);
    setAllowSharedRunnerJoin(settings.allow_shared_runner_join);
    setSharedRunnerAutoJoinToken(settings.shared_runner_auto_join_token);
  }, [settings]);

  useEffect(() => {
    if (
      allowSharedRunnerAutoJoin === settings.allow_shared_runner_auto_join &&
      allowSharedRunnerJoin === settings.allow_shared_runner_join
    ) {
      return;
    }
    updateSettings();
  }, [allowSharedRunnerAutoJoin, allowSharedRunnerJoin]);

  async function updateSettings() {
    const response = (await UpdateSettings(
      settings.maintenance,
      settings.signup,
      settings.create_projects,
      settings.create_flows,
      settings.create_runners,
      settings.create_api_keys,
      settings.add_project_members,
      settings.add_flow_actions,
      settings.start_executions,
      settings.receive_alerts,
      allowSharedRunnerAutoJoin,
      allowSharedRunnerJoin,
      sharedRunnerAutoJoinToken,
    )) as any;

    if (response.success) {
      addToast({
        title: "Settings",
        description: "Settings updated successfully",
        color: "success",
        variant: "flat",
      });
      router.refresh();
    } else {
      router.refresh();
      addToast({
        title: "Settings",
        description: "Failed to update settings",
        color: "danger",
        variant: "flat",
      });
    }
  }

  function copyJoinToken() {
    navigator.clipboard.writeText(sharedRunnerAutoJoinToken);
    addToast({
      title: "Runner",
      description: "Join token copied to clipboard",
      color: "success",
      variant: "flat",
    });
  }

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
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
              color="success"
              isSelected={allowSharedRunnerAutoJoin}
              size="sm"
              onValueChange={setAllowSharedRunnerAutoJoin}
            />
          </CardBody>
        </Card>

        <Card fullWidth>
          <CardBody className="flex items-center justify-between text-center">
            <div className="flex flex-col">
              <p className="text-md font-bold">Runner Join</p>
              <p className="text-sm text-default-500">
                Prevent new runners from joining
              </p>
            </div>
            <Spacer y={2} />
            <Switch
              color="success"
              isSelected={allowSharedRunnerJoin}
              size="sm"
              onValueChange={setAllowSharedRunnerJoin}
            />
          </CardBody>
        </Card>

        <Card fullWidth>
          <CardBody className="flex items-center justify-between text-center">
            <div className="flex flex-col">
              <p className="text-md font-bold">Auto Join Token</p>
              <p className="text-sm text-default-500">
                Use this token in your runner configuration to allow auto join
              </p>
            </div>
            <Spacer y={2} />
            <Button
              color="primary"
              size="sm"
              variant="flat"
              onPress={copyJoinToken}
            >
              <Icon icon="solar:copy-linear" />
              Copy Token
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
        shared_runner
        disclosure={addRunnerModal}
        project={{
          id: "admin",
        }}
      />
    </>
  );
}
