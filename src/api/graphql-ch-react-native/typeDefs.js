const { gql } = require('server-graphql').driver;

module.exports = gql`
    type Query {
        s(): Boolean 
    }

`;