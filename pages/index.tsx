import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAuth } from "react-oidc-context";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { useToken } from "../hooks/useToken";
import { TextInput, Button } from "@mantine/core";

export default function Home() {
  const auth = useAuth();
  const token = useToken();
  console.log(token);

  if (auth.isLoading) {
    return <div>Loading..</div>;
  }

  function handleLogin() {
    try {
      auth.signinRedirect();
    } catch (error) {
      console.error(error);
    }
  }

  function handleLogout() {
    try {
      auth.signoutRedirect();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {auth.isAuthenticated || token ? (
          <div>
            <h5 className={styles.title}>Welcome {auth.user?.profile.name}</h5>
            <Link href={"/voucher"}>Send Faktura</Link>
            <Button onClick={handleLogout}>logout</Button>
          </div>
        ) : (
          <div>
            <button className="catacloud-login" onClick={handleLogin}>
              <Image
                src="/Catacloud-app-icon.png"
                alt="logo"
                height={100}
                width={100}
              />
              <span style={{ color: "1275eE" }}>Sign in with Catacloud</span>
            </button>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
