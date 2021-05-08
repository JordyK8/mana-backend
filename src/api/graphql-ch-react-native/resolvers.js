const { PubSub } = require('server-graphql').driver;

const pubsub = new PubSub();

const s = async (_, { }, context) => {
    console.log(context);
    return true
}

module.exports = {
    
    Query: {
        s
    },
};