const { gql } = require('apollo-server-core');

module.exports = 
gql`
  type Query {
    FindUser: [User]!
    FindAttack: [Attack]!
  }
  type Mutation {
    CreateUser(data: UserInput!): User
    CreateAttack(data: AttackInput!): Attack
  }
  type User {
    _id: String!
    name: String!
    email: String!
  }
  input UserInput {
    name: String!
    email: String!
  }
  type Attack {
    intencity: String!
    start: Int!
    end: Int!
  }
  input AttackInput {
    intencity: String!
    start: Int!
    end: Int!
  }
`;


