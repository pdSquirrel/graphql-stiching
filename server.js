import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import Schema from './graphql/schema'

const server = express()

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: Schema
}))

console.log(Schema)

server.listen(4000, () => {
  console.log('*** Server started on port 4000')
})
