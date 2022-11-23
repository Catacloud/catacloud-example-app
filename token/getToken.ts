import { TokenDecoded } from "./types";

export const getToken = () => {
  let token: TokenDecoded | null;
  let key = `oidc.user:${process.env.NEXT_PUBLIC_AUTHORITY}/:catacloud-web`;
  console.log("key", key);
  token = JSON.parse(String(window.localStorage.getItem(key)));
  console.log("token", token);
  if (token) {
    return token;
  } else {
    key = `oidc.user:${process.env.NEXT_PUBLIC_AUTHORITY}:${process.env.NEXT_PUBLIC_CLIENT_ID}`;
    token = JSON.parse(String(window.sessionStorage.getItem(key)));
    return token;
  }
};
