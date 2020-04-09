
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { ApolloServer } from "apollo-server-express";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const PORT = process.env.PORT || 4000
const ISDEV = process.env.NODE_ENV !== 'production'
const CORS_ORIGIN = ISDEV ? `https://localhost:3000` : process.env.CLIENT_URI

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers, playground: ISDEV });

  await createConnection(); // connection defined in ormconfig.json

  const app = express();

  server.applyMiddleware({
    app,
    cors: {
      origin: CORS_ORIGIN,
      credentials: true
    }
  });

  app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath} ✨`)
  );
};

startServer();