import { useState, useEffect } from "react";
import { getToken } from "../token/getToken";
import { TokenDecoded } from "../token/types";

export const useToken = () => {
  const [token, setToken] = useState<TokenDecoded | null>(null);

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
