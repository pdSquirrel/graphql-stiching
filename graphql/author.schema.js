import { makeExecutableSchema } from 'graphql-tools'

const Author = makeExecutableSchema({
  typeDefs: `
    type Author {
      id: ID!
      firstName: String
      LastName: String
      email: String
    }

    type Query {
      getAuthorById(id: ID): Author
    }
  `
})

export default Author
