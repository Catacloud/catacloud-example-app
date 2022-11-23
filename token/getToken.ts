import { TokenDecoded } from "./types";

export const getToken = () => {
  let token: TokenDecoded | null;
  let key = `oidc.user:${process.env.NEXT_PUBLIC_AUTHORITY}/:catacloud-web`;
  console.log("key", key);
  const catacloudWindow = window.open("https://app.catacloud.com/");
  if (catacloudWindow?.localStorage.getItem(key)) {
    token = JSON.parse(String(catacloudWindow?.localStorage.getItem(key)));
    if (token) {
      return token;
    }
    console.log("token", token);
  }
  key = `oidc.user:${process.env.NEXT_PUBLIC_AUTHORITY}:${process.env.NEXT_PUBLIC_CLIENT_ID}`;
  token = JSON.parse(String(window.sessionStorage.getItem(key)));
  return token;
};
