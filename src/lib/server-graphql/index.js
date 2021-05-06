const apollo = require('apollo-server-express');

module.exports = {
  graphqlServer: (config) => new apollo.ApolloServer(config),
  driver: apollo,
};