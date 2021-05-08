// const config = require('config/cb');
const http = require('http');
const app = require('server')();
const { graphqlServer } = require('server-graphql');
const {
  GraphQLResolvers,
  GraphQLTypeDefs,
} = require('graphql-ch-react-native');

module.exports = () => {
  const apolloSrv = graphqlServer({
    typeDefs: GraphQLTypeDefs,
    resolvers: GraphQLResolvers,
    playground: true,
  });

  apolloSrv.applyMiddleware({
    app,
  });

  const server = http.createServer(app);
  apolloSrv.installSubscriptionHandlers(server);

  return server;
};