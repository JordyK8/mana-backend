const UsersService = require('svc-users');

const CreateUser = async (_, {data}, context) => {
    const userService = new UsersService()
    return userService.add(data)
}
const CreatePost = async (_, {data}, context) => {
    console.log(data);
    return true
}
const FindUser = async () => {
    console.log('here');
    const userService = new UsersService()
    return userService.find()
}


module.exports = {
    
    Query: {
        FindUser
    },
    Mutation: {
        CreateUser,
        CreatePost,
    }
};