import { Icon } from "@iconify/react";
import { Card, CardBody, Spacer } from "@heroui/react";

import ChartCard from "../../charts/chartCard";

export default function ProjectsStats({
  projects,
  stats,
  interval,
}: {
  projects: any;
  stats: any;
  interval: number;
}) {
  return (
    <div>
      <p className="text-xl font-bold">Projects</p>
      <Spacer y={1} />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardBody>
            <div className="flex items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-small bg-primary/10 text-primary">
                <Icon icon="solar:box-broken" width={26} />
              </div>
              <div>
                <p className="text-md font-bold">{projects.length}</p>
                <p className="text-sm text-default-500">Total Projects</p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-small bg-danger/10 text-danger">
                <Icon icon="solar:box-broken" width={26} />
              </div>
              <div>
                <p className="text-md font-bold">
                  {projects.filter((p: any) => p.disabled).length}
                </p>
                <p className="text-sm text-default-500">Disabled Projects</p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-small bg-danger/10 text-danger">
                <Icon icon="solar:box-broken" width={26} />
              </div>
              <div>
                <p className="text-md font-bold">
                  {projects.filter((p: any) => !p.shared_runners).length}
                </p>
                <p className="text-sm text-default-500">
                  Projects without Shared Runners
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Spacer y={2} />
      <ChartCard
        color="#006fed"
        interval={interval}
        name="created projects"
        stats={stats.project_creation_stats}
      />
    </div>
  );
}
