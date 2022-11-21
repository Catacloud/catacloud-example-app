import React, { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useRouter } from "next/router";

export default function Callback() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);

  return <div>{}</div>;
}
