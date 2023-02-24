import { ApolloClient, InMemoryCache } from "@apollo/client";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();

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

var uri: string;

console.log(process.env.APOLLO_PRODUCTION_URI);

if (process.env.NODE_ENV == "production") {
  uri = process.env.APOLLO_PRODUCTION_URI;
} else {
  uri = process.env.APOLLO_DEVELOPMENT_URI;
}

const client = new ApolloClient({
  // uri: uri,
  uri: "https://fullstack-asos-server-production.up.railway.app/",
  cache: cache,
});

export default client;
