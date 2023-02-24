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

// const cache = new InMemoryCache();

var client: any;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql/",
    cache: cache,
  });
} else {
  client = new ApolloClient({
    uri: "https://fullstack-asos-server-production.up.railway.app/",
    cache: cache,
  });
}

export default client;
