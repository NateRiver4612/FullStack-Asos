import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: process.env.NEXT_PUBLIC_WP_AUTHORIZATION,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000/api/graphql",
    "Access-Control-Allow-Credentials": false,
  },
  credentials: false,
});

export default client;
