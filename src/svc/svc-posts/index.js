const User = require('mongodb/models/User');
const Post = require('mongodb/models/Post');

class PostService {
  /**
   * Class constructor
   * @param {*} sub
   */
  constructor() {
    this.models = {
      User,
      Post,
    };
  }

  /**
   * Creates new Post
   * @param {Object} data
   * @return {Promise<Model>}
   * @throws {Error} on validation failure
   */
  async create(data) {
    try{
      const postData = await this.handlePostData(data)
      const post = await this.models.Post.create(postData)
      return !!post;
    } catch(e) {
      throw Error(e)
    }
  }

  /**
   * Get Posts
   * @param {Object} filters
   * @return {Promise<Model>}
   * @throws {Error} on validation failure
   */
  async find() {
    try{
      const posts = await this.models.Post.find()
      return posts;
    } catch(e) {
      throw Error(e)
    }
  }

  /**
   * Handels nessecary actions for data 
   * @param {Object} data 
   * @return {Object} post data ready to create
   * @throws {Error} on any problems in functions
   */
  async handlePostData(data){
    console.log(data.img);
    try{
      if(!data.user) throw new Error('No user was provided for this post.')
      data.user = await this.models.User.findById(data.user)
      if(!data.message) throw new Error('No message has been provided for post.')
      if(!['important', 'social', 'news', 'default'].includes(data.category)) data.category = 'default'
      if(data.img) data.img = await this.uploadPostImg(data.img)
      return data
    } catch(e) {
      throw Error(e)
    }
  }
 /**
  * 
  * @param {Object} img 
  * @returns {String} identifier for the image
  * @throws {Error} on any problems in functions
  */
  async uploadPostImg(file){
    if (!file) return;
    file.then(async (f) => {
      console.log('file', f);
      const body = f.createReadStream();
      const filename = `${id}`;
      try {
        const data = await aws.putObject(config.get('S3_AVATAR_BUCKET'), body, filename);
        const extension = f.mimetype.replace('image/', '');
        return this.models.Agent.updateOne(
          { _id: id },
          { avatar: { filename, ETag: data.ETag, extension } },
        );
      } catch (e) {
        throw new Error(e);
      }
    });
  }
}

module.exports = PostService;