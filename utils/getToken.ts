export const getToken = () => {
  let token;
  let key = `oidc.user:${process.env.NEXT_PUBLIC_AUTHORITY}:catacloud-web`;
  token = JSON.parse(String(window.localStorage.getItem(key)));
  console.log(token);
  if (token) {
    return token;
  } else {
    console.log(token);
    key = `oidc.user:${process.env.NEXT_PUBLIC_AUTHORITY}:${process.env.NEXT_PUBLIC_CLIENT_ID}`;
    token = JSON.parse(String(window.sessionStorage.getItem(key)));
    return token;
  }
};
