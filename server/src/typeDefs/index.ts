import { query } from './query'
import { mutation } from './mutation'

const { bookType } = require("./types")

export const typeDefs = [query, mutation, bookType]
