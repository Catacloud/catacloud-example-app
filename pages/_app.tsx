import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4200/graphql",
  cache: new InMemoryCache(),
});

const oidcConfig: AuthProviderProps = {
  authority: process.env.NEXT_PUBLIC_AUTHORITY as string,
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
  // client_secret: process.env.SECRET,
  redirect_uri: `${process.env.NEXT_PUBLIC_CLIENT_URL}/auth/callback`,
  post_logout_redirect_uri: `${process.env.NEXT_PUBLIC_CLIENT_URL}/auth/logout/callback`,
  response_type: "code",
  scope: "openid profile email system ",
  loadUserInfo: true,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider {...oidcConfig}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
