import { ApolloServer, gql } from "@apollo/server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import connectMongo from "../../../utils/mongodb";
import allowCors from "../../../utils/cors.utils";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: connectMongo(),
});

const handler = startServerAndCreateNextHandler(apolloServer);

export default allowCors(handler);
