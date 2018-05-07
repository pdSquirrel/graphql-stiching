import { makeExecutableSchema } from "graphql-tools";

const Post = makeExecutableSchema({
  typeDefs: `
    type Post {
      id: ID!
      title: String
      body: String
      authorId: ID!
    }

    type Query {
      postById(id: ID): Post
    }
  `
})

export default Post
