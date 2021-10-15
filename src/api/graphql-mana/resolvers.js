const UserService = require('svc-users');
const PostService = require('svc-posts')

const CreateUser = async (_, {data}, context) => {
    const userService = new UserService()
    return userService.add(data)
}
const CreatePost = async (_, {data}, context) => {
    const postService = new PostService()
    return postService.create(data)
}
const FindUser = async () => {
    console.log('here');
    const userService = new UserService()
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