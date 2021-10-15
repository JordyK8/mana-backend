const { gql } = require('apollo-server-core');

module.exports = 
gql`
  type Query {
    FindUser: [User]!
    FindAttack: [Attack]!
  }
  type Mutation {
    CreateUser(data: UserInput!): User
    CreatePost(data: PostInput!): Boolean
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
  input PostInput {
    message: String!
    user: String!
    category: String
    img: Upload
  }
`;


