import { makeExecutableSchema, mergeSchemas } from "graphql-tools";
import PostSchema from './post.schema'
import AuthorSchema from './author.schema'

const schema = mergeSchemas({
  schemas: [
    PostSchema,
    AuthorSchema,
  ],
})

console.log(schema)

export default schema;
