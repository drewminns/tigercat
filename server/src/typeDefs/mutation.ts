import { gql } from 'apollo-server-express'

export const mutation = gql`
  type Mutation {
    addUser(firstName: String!, lastName: String, age: Int!): Boolean!
  }
`