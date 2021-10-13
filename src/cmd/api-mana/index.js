const bootstrap = require('./bootstrap');

const app = bootstrap();
      app.listen(
        8080,
        (err) => {
          if (err) {
            throw err;
          }
          console.log(`Server ready at http://${'http://localhost:8080'}/graphql`);
          console.log(`Subscriptions ready at http://${'http://localhost:8080'}/graphql`);
        },
      )
