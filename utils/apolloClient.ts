import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Product: {
      fields: {
        likes: {
          merge(existing = [], incoming: any[]) {
            return [...existing, ...incoming];
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql/",
  cache: cache,
});

export default client;
