const { gql } = require('apollo-server-core');

module.exports = 
gql`
  type Query {
    s: User
  }
  type User {
    name: String!
  }
`;


