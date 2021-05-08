const { ApolloServer } = require('apollo-server-express');
module.exports = {
  graphqlServer: (config) => new ApolloServer(config),
};
