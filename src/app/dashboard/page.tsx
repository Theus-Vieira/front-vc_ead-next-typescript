"use client";

import { useEffect } from "react";
import { useUser } from "@/providers";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const { user } = useUser();

  useEffect(() => {
    !user.objectId && router.push("/");
  }, []);

  return (
    <>
      {user.objectId && (
        <>
          <h1>dashboard</h1>
        </>
      )}
    </>
  );
}
