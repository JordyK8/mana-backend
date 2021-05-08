const Attack = require('mongodb/models/Attack');

class AttackService {
  constructor() {
    this.models = {
      Attack,
    };
  }

  /**
   * Creates new Attack
   * @param {Object} data
   * @return {Promise<Model>}
   * @throws {Error} on validation failure
   */
  async add(data) {
    const attack = await this.models.Attack.create(data)
    return attack;
  }

}

module.exports = UsersService;