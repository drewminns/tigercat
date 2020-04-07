import { GraphQLServer } from 'graphql-yoga'
// import { permissions } from './permissions'
import { schema } from './schema'
import { createContext } from './context'

const PORT = process.env.PORT || 4000;

new GraphQLServer({
  schema,
  context: createContext,
  // middlewares: [permissions],
}).start(() =>
  console.log(
    `🚀 Server ready at: http://localhost:${PORT}\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-auth#using-the-graphql-api`,
  ),
)