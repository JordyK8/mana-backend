const http = require('http');
const app = require('server')();
const { graphqlServer } = require('server-graphql');
const {
  GraphQLResolvers,
  GraphQLTypeDefs,
} = require('graphql-mana');
const applyRouting = require('rest-mana')
module.exports = () => {
  const apolloSrv = graphqlServer({
    typeDefs: GraphQLTypeDefs,
    resolvers: GraphQLResolvers,
    playground: true,
  });
  apolloSrv.applyMiddleware({
    app,
  });

  applyRouting(app)
  
  const server = http.createServer(app);
  apolloSrv.installSubscriptionHandlers(server);


  return server;
};