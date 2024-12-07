"use server";

import { cookies } from "next/headers";

export default async function CreateFlow(
  name: string,
  description: string,
  projectId: string,
  runnerId: string,
) {
  "use client";
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;

  try {
    const headers = new Headers();

    headers.append("Content-Type", "application/json");
    if (token) {
      headers.append("Authorization", token);
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/flows/`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        name: name,
        description: description,
        project_id: projectId,
        runner_id: runnerId,
      }),
    });
    const data = await res.json();

    return data;
  } catch (error) {
    return { error: "Failed to fetch data" };
  }
}
