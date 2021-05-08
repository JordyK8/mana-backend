const UsersService = require('svc-users');

const s = async (_, { }, context) => {
    const userService = new UsersService()
    return userService.add()
}

module.exports = {
    
    Query: {
        s
    },
};