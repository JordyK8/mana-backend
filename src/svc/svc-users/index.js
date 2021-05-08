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
   * Creates new agent
   * @param {Object} data
   * @return {Promise<Model>}
   * @throws {Error} on validation failure
   */
  async add() {
    const user = this.models.User.create({name: 'Jordy'})
    return user;
  }
}

module.exports = UsersService;