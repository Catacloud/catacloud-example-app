import { TokenDecoded } from "./types";

export const getToken = () => {
  let key = `oidc.user:${process.env.NEXT_PUBLIC_AUTHORITY}:${process.env.NEXT_PUBLIC_CLIENT_ID}`;
  const token: TokenDecoded | null = JSON.parse(
    String(window.sessionStorage.getItem(key))
  );
  return token;
};
