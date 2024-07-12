"use server";

import { cookies } from "next/headers";

export default async function ChangeTokenStatus(
  id: string,
  status: boolean,
  reason: string,
) {
  "use client";
  const cookieStore = cookies();
  const token = cookieStore.get("session")?.value;

  try {
    const headers = new Headers();

    headers.append("Content-Type", "application/json");
    if (token) {
      headers.append("Authorization", token);
    }
    const res = await fetch(`${process.env.API_ENDPOINT}/token/${id}/status`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({
        disabled: status,
        disabled_reason: reason,
      }),
    });
    const data = await res.json();

    return data;
  } catch (error) {
    return { error: "Failed to update token" };
  }
}
