const config = require('config/cb');
// const { publishFollow } = require('mongodb/helpers');
const bootstrap = require('./bootstrap');

const app = bootstrap();

if (require.main === module) {

      app.listen(
        config.get('IMPLEMENTATION_API_PORT'),
        config.get('IMPLEMENTATION_API_HOST'),
        (err) => {
          if (err) {
            throw err;
          }
          logger.info(`Server ready at http://${config.get('IMPLEMENTATION_API_HOST')}:${config.get('IMPLEMENTATION_API_PORT')}/graphql`);
          logger.info(`Subscriptions ready at http://${config.get('IMPLEMENTATION_API_HOST')}:${config.get('IMPLEMENTATION_API_PORT')}/graphql`);
        },
      )
    // .then(() => Promise.all([
    //   publishFollow(ScheduledCall),
    //   publishFollow(Notification),
    // ]))
    // .catch((err) => logger.error(err));
}