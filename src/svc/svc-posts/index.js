const User = require('mongodb/models/User');
const Post = require('mongodb/models/Post');
const minioClient = require("minio");
const MinioService = require('svc-minio')

class PostService {
  /**
   * Class constructor
   */
  constructor() {
    this.models = {
      User,
      Post,
    };
    this.services = {
      minio: new MinioService(minioClient),
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
    try{
      if(!data.user) throw new Error('No user was provided for this post.');
      data.user = await this.models.User.findById(data.user);
      if(!data.message) throw new Error('No message has been provided for post.');
      if(!['important', 'social', 'news', 'default'].includes(data.category)) data.category = 'default';
      return data;
    } catch(e) {
      throw Error(e);
    };
  };
  
 /**
  * 
  * @param {String} id identifier of the post to attach file to
  * @param {Object} filename
  * @returns {<Promise>} updated post
  * @throws {Error} on any problems in functions
  */
  async attachImage(id, filename){
    return this.models.Post.updateOne({ _id: id }, { img: filename });
  };

 /**
  * 
  * @param {String} id identifier of the post to attach file to
  * @returns {File} file from bucket
  * @throws {Error} on any problems in functions
  */
  async getPostImage(id){
    try{
      const file = await this.services.minio.getFile(id, 'post-files');
      return file;
    } catch(e) {
      throw Error(e);
    };
  };
};

module.exports = PostService;