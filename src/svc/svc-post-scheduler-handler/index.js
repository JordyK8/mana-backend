const moment = require('moment-timezone')
const Post = require('mongodb/models/Post')
const User = require('mongodb/models/User')
class PostSchedulerHandler {
  constructor(){
      this.models = {
          Post,
          User,
      }
  }

  async execute() {
      console.log('Started Post Scheduler Handler')
      return this.check()
  }
  async getPosts() {
    const now = moment.tz().unix()
    console.log(now);
    try{
      await this.models.Post.updateMany(
        { published: false, postTime: { $gte: now } },
        { published: true },
      );
      await this.models.Post.updateMany(
        {published: true, removeTime: { $gte: now }},
        { published: false },
      );
    } catch(e) {
        console.log(e)
    }

  }

  async check() {
    try{
      await this.getPosts()
    } catch(e) {
        console.log(e)
    }
    await PostSchedulerHandler.delay(3000);
    process.nextTick(() => this.check());
  }

  static async delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
module.exports = PostSchedulerHandler