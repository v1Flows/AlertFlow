"use server";

import { cookies } from "next/headers";

interface Result {
  result: string;
  runner: {};
}

interface ErrorResponse {
  success: false;
  error: string;
  message: string;
}

interface SuccessResponse {
  success: true;
  data: Result;
}

export default async function AddRunner({
  projectId,
  name,
  alertflow_runner,
}: any): Promise<SuccessResponse | ErrorResponse> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("session");

    if (!token) {
      return {
        success: false,
        error: "Authentication token not found",
        message: "User is not authenticated",
      };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/runners/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token.value,
      },
      body: JSON.stringify({ name, project_id: projectId, alertflow_runner }),
    });

    if (!res.ok) {
      const errorData = await res.json();

      return {
        success: false,
        error: `API error: ${res.status} ${res.statusText}`,
        message: errorData.message || "An error occurred",
      };
    }

    const data = await res.json();

    return {
      success: true,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
      message: "Failed to add runner",
    };
  }
}
