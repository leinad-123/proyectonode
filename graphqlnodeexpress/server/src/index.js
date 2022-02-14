import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import "dotenv/config"

import schema from "./graphql/schema";
import dbConnect from "./database/mongodb";

async function startApolloServer(schema) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  await dbConnect();
  console.log(">> DB is connected!")
  
  server.applyMiddleware({ app, path: "/api/graphql" });

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));


  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(schema);
