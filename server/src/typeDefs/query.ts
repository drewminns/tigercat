import { gql } from 'apollo-server-express'

export const query = gql`
  type Query {
    getUser(id: Int!): User
  }
`