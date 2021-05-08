const UsersService = require('svc-users');

const CreateUser = async (_, {data}, context) => {
    const userService = new UsersService()
    return userService.add(data)
}
const FindUser = async () => {
    console.log('here');
    const userService = new UsersService()
    return userService.find()
}

const CreateAttack = async (_, { data }, context) => {
    console.log(data);
    const attackService = new AttackService()
    return attackService.add(data)
}

module.exports = {
    
    Query: {
        FindUser
    },
    Mutation: {
        CreateUser,
        CreateAttack
    }
};