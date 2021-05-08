// const config = require('config');
// const { publishFollow } = require('mongodb/helpers');
const bootstrap = require('./bootstrap');

const app = bootstrap();

if (require.main === module) {

      app.listen(
        config.get('http://localhost:8080'),
        // config.get('http://localhost:8080'),
        (err) => {
          if (err) {
            throw err;
          }
          logger.info(`Server ready at http://${config.get('http://localhost:8080')}:${config.get('http://localhost:8080')}/graphql`);
          logger.info(`Subscriptions ready at http://${config.get('http://localhost:8080')}:${config.get('http://localhost:8080')}/graphql`);
        },
      )
    // .then(() => Promise.all([
    //   publishFollow(ScheduledCall),
    //   publishFollow(Notification),
    // ]))
    // .catch((err) => logger.error(err));
}