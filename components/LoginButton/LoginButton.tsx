import Image from "next/image";
import React from "react";
import { useAuth } from "react-oidc-context";
import styles from "./styles.module.css";

export default function LoginButton({ onClick }: { onClick?: () => void }) {
  const auth = useAuth();
  async function handleLogin() {
    try {
      await auth.signinRedirect();
      onClick?.();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <button onClick={handleLogin} className={styles.login}>
      <Image src="/Catacloud-icon.svg" alt="logo" height={40} width={40} />
      Sign in with Catacloud
    </button>
  );
}
