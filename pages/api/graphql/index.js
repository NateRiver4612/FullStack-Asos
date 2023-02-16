import { ApolloServer, gql } from "@apollo/server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import connectMongo from "../../../utils/mongodb";
import allowCors from "../../utils/cors";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const connect = async () => {
  return await connectMongo();
};

try {
  connect();
  console.log("Connected to MongoDb");
} catch (error) {
  console.log(error);
}

const handler = startServerAndCreateNextHandler(apolloServer);

export default allowCors(handler);
