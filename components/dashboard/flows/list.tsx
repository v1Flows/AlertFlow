"use client";
import React from "react";
import { toast } from "sonner";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
  Chip,
  CardFooter,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Snippet,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import {
  VerticalDotsIcon,
  DeleteDocumentIcon,
  CopyDocumentIcon,
  EyeIcon,
  InfoIcon,
} from "@/components/icons";
import { IconWrapper } from "@/lib/IconWrapper";
import DeleteFlow from "@/lib/fetch/flow/DELETE/DeleteFlow";

import NewFlowModal from "./create";

export default function FlowList({ flows, projects, settings }: any) {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [flowToDelete, setFlowToDelete] = React.useState("");

  const copyFlowIDtoClipboard = (key: string) => {
    // eslint-disable-next-line no-undef
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      // eslint-disable-next-line no-undef
      navigator.clipboard.writeText(key);
      toast.success("Copied to clipboard!");
    } else {
      toast.error("Failed to copy flow ID to clipboard");
    }
  };

  function deleteFlowModal(id: string) {
    setFlowToDelete(id);
    onOpenChange();
  }

  function deleteFlow() {
    onOpenChange();
    DeleteFlow(flowToDelete);
    router.refresh();
  }

  return (
    <main>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <p className="text-2xl font-bold mb-0 text-default-500">
            {flows.length}
          </p>
          <p className="text-2xl font-bold mb-0 text-primary">Flows</p>
        </div>
        <NewFlowModal flows={flows} projects={projects} settings={settings} />
      </div>
      <Divider className="mb-4 mt-4" />
      {flows.error && (
        <Card className="shadow shadow-danger">
          <CardHeader className="justify-start gap-2 items-center">
            <IconWrapper className="bg-danger/10 text-danger">
              <InfoIcon className="text-lg" />
            </IconWrapper>
            <p className="text-md font-bold text-danger">Error</p>
          </CardHeader>
          <CardBody>
            <p>{flows.error}. Please try again later.</p>
          </CardBody>
        </Card>
      )}
      {!flows.error && (
        <div className="grid lg:grid-cols-2 gap-4">
          {flows.map((flow: any) => (
            <div key={flow.id} className="col-span-1">
              <Card
                fullWidth
                className="hover:shadow-md hover:shadow-primary shadow shadow-primary-200"
              >
                <CardHeader className="justify-between">
                  <div className="flex flex-col items-start">
                    <p className="text-md">{flow.name}</p>
                    <p className="text-sm text-default-500">
                      {flow.description}
                    </p>
                  </div>
                  <Dropdown backdrop="opaque">
                    <DropdownTrigger>
                      <Button isIconOnly size="sm" variant="light">
                        <VerticalDotsIcon
                          className="text-default-300"
                          height={undefined}
                          width={undefined}
                        />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownSection title="Actions">
                        <DropdownItem
                          startContent={<CopyDocumentIcon />}
                          onClick={() => copyFlowIDtoClipboard(flow.id)}
                        >
                          Copy ID
                        </DropdownItem>
                      </DropdownSection>
                      <DropdownSection title="Danger zone">
                        <DropdownItem
                          className="text-danger"
                          color="danger"
                          startContent={<DeleteDocumentIcon />}
                          onClick={() => deleteFlowModal(flow.id)}
                        >
                          Delete
                        </DropdownItem>
                      </DropdownSection>
                    </DropdownMenu>
                  </Dropdown>
                </CardHeader>
                <Divider />
                <CardBody>
                  <div className="flex items-center justify-start gap-2 flex-wrap">
                    <Chip color="primary" radius="sm" size="sm" variant="flat">
                      <p className="font-bold">
                        Project:{" "}
                        {projects.map(
                          (project: any) =>
                            project.id === flow.project_id && project.name,
                        )}
                      </p>
                    </Chip>
                    <Chip
                      color={flow.active ? "success" : "danger"}
                      radius="sm"
                      size="sm"
                      variant="flat"
                    >
                      <p className="font-bold">
                        Status: {flow.active ? "Active" : "Inactive"}
                      </p>
                    </Chip>
                    <Chip
                      color="secondary"
                      radius="sm"
                      size="sm"
                      variant="flat"
                    >
                      <p className="font-bold">ID: {flow.id}</p>
                    </Chip>
                  </div>
                  <div className="flex items-end justify-between">
                    <p className="text-small text-default-500 mt-2">
                      Updated At:{" "}
                      {new Date(flow.updated_at).toLocaleString("de-DE")}
                    </p>
                    <p className="text-small text-default-500 mt-2">
                      Created At:{" "}
                      {new Date(flow.created_at).toLocaleString("de-DE")}
                    </p>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button
                    className="w-full font-bold"
                    color="primary"
                    radius="sm"
                    variant="flat"
                    onPress={() => router.push(`/dashboard/flows/${flow.id}`)}
                  >
                    <EyeIcon />
                    Go to Flow
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      )}
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="w-full">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-danger">
                Are you sure?
              </ModalHeader>
              <ModalBody>
                <p>
                  You are about to delete the following flow which{" "}
                  <span className="font-bold">cannot be undone</span>:
                </p>
                <Divider />
                <Snippet hideCopyButton hideSymbol>
                  <span>
                    Name:{" "}
                    {flows.find((flow: any) => flow.id === flowToDelete).name}
                  </span>
                  <span>ID: {flowToDelete}</span>
                </Snippet>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="bordered" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="danger" variant="solid" onPress={deleteFlow}>
                  DELETE
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
