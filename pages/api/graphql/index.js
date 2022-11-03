import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers/index";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  cors: { origin: true },
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
