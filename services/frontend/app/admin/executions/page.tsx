import ErrorCard from "@/components/error/ErrorCard";
import AdminGetExecutions from "@/lib/fetch/admin/executions";
import AdminGetFlows from "@/lib/fetch/admin/flows";
import { AdminGetAlerts } from "@/lib/fetch/admin/alerts";
import AdminGetProjects from "@/lib/fetch/admin/projects";
import AdminGetRunners from "@/lib/fetch/admin/runners";
import Executions from "@/components/dashboard/flows/flow/executions";

export default async function AdminExecutionsPage() {
  const flowsData = AdminGetFlows();
  const projectsData = AdminGetProjects();
  const runnersData = AdminGetRunners();
  const alertsData = AdminGetAlerts();
  const executionsData = AdminGetExecutions();

  const [flows, projects, runners, alerts, executions] = (await Promise.all([
    flowsData,
    projectsData,
    runnersData,
    alertsData,
    executionsData,
  ])) as any;

  return (
    <>
      {executions.success && alerts.success && runners.success ? (
        <Executions
          alerts={alerts.data.alerts}
          canEdit={true}
          executions={executions.data.executions}
        />
      ) : (
        <ErrorCard
          error={
            executions.error || alerts.error || projects.error || runners.error
          }
          message={executions.message || alerts.message || runners.message}
        />
      )}
    </>
  );
}
