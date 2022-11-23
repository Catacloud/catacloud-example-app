import { useState, useEffect } from "react";
import { getToken } from "../utils/getToken";

export const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    console.log("ggg");
    const listenStorageChange = () => {
      console.log("ggg");
      const token = getToken();
      setToken(token);
    };
    listenStorageChange();
    window.addEventListener("storage", listenStorageChange);
    return () => window.removeEventListener("storage", listenStorageChange);
  }, []);

  return token;
};
