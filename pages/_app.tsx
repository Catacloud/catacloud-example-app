import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  createHttpLink,
} from "@apollo/client";
import Head from "next/head";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "../token/getToken";

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  // get token from local storage
  const token = getToken();

  return {
    headers: {
      ...headers,
      authorization: token?.access_token ? `Bearer ${token.access_token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const oidcConfig: AuthProviderProps = {
  authority: process.env.NEXT_PUBLIC_AUTHORITY as string,
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
  redirect_uri: `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
  post_logout_redirect_uri: `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
  response_type: "code",
  scope: "openid profile email system voucher:write",
  loadUserInfo: true,
  monitorSession: true,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Catacloud</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ApolloProvider client={client}>
        <AuthProvider {...oidcConfig}>
          <Component {...pageProps} />
        </AuthProvider>
      </ApolloProvider>
    </>
  );
}
