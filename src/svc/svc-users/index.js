const User = require('mongodb/models/User');


class UsersService {
  /**
   * Class constructor
   * @param {*} sub
   */
  constructor() {
    this.models = {
      User,
    };
  }

  /**
   * Creates new User
   * @param {Object} data
   * @return {Promise<Model>}
   * @throws {Error} on validation failure
   */
  async add(data) {
    const user = await this.models.User.create(data)
    return user;
  }

  /**
   * Get User
   * @param {Object} id
   * @return {Promise<Model>}
   * @throws {Error} on validation failure
   */
  async find() {
    const users = await this.models.User.find()
    console.log(users);
    return users;
  }
}

module.exports = UsersService;