"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

import { Flash, MailIcon, Activity } from "@/components/icons";

export default function FlowTabs({ flow }: any) {
  const [selected, setSelected] = React.useState("photos");

  return (
    <main>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          color="primary"
          selectedKey={selected}
          variant="solid"
          onSelectionChange={(key: any) => setSelected(key as string)}
        >
          <Tab
            key="actions"
            title={
              <div className="flex items-center space-x-2">
                <Flash fill="currentColor" size={20} />
                <span>Actions</span>
              </div>
            }
          >
            {/* <ProjectMembers members={project.members} projectID={project.id} /> */}
          </Tab>
          <Tab
            key="executions"
            title={
              <div className="flex items-center space-x-2">
                <Activity fill="currentColor" size={20} />
                <span>Executions</span>
              </div>
            }
          >
            {/* <Runners project={project} runners={runners} /> */}
          </Tab>
          <Tab
            key="payloads"
            title={
              <div className="flex items-center space-x-2">
                <MailIcon className="h-5 w-5" />
                <span>Payloads</span>
              </div>
            }
          >
            {/* <ProjectAPIKeys apiKeys={apiKeys} project={project} /> */}
          </Tab>
        </Tabs>
      </div>
    </main>
  );
}
