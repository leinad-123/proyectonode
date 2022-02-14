import { makeExecutableSchema } from "@graphql-tools/schema";

import type from "./type";
import query from "./query";
import mutation from "./mutation";

const schema = {
  typeDefs: type,
  resolvers: {
    Query: query,
    Mutation: mutation,
  },
};
module.exports = makeExecutableSchema(schema);
