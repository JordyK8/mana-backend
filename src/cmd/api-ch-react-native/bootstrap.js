// const config = require('config/cb');
const http = require('http');
const { cryptr } = require('encryption');
const cookieParser = require('cookie-parser');
const httpHeadersPlugin = require('apollo-server-plugin-http-headers');
const app = require('server')();
const { graphqlServer } = require('server-graphql');
const {
  GraphQLImplResolvers,
  GraphQLImplTypeDefs,
  // SessionDirectives,
  // SessionTypeDefs,
} = require('graphql-implementation');

module.exports = () => {
  const apolloSrv = graphqlServer({
    typeDefs: [SessionTypeDefs, GraphQLImplTypeDefs],
    schemaDirectives: {
      ...SessionDirectives,
    },
    subscriptions: {
      // onConnect: (cnxnPramas, webSocket, cnxnContect) => {
      //   const { cookie } = webSocket.upgradeReq.headers;
      //   if (!cookie) {
      //     throw new Error('unable to fetch cookie from webSocket');
      //   }
      //   const parsedCookie = cookie.substring((cookie.indexOf('qooqie_cmb_ses=') + 15), cookie.length);
      //   const {
      //     sub, session_id, implementation_id, scheduled_call_id,
      //   } = JSON.parse(cryptr(config.get('CRYPTO_SECRET')).decrypt(parsedCookie));
      //   if (!sub) {
      //     throw new Error('unable to return sub');
      //   }
      //   return {
      //     sub, session_id, implementation_id, scheduled_call_id,
      //   };
      // },
    },
    resolvers: {
      ...GraphQLImplResolvers,
    },
    plugins: [httpHeadersPlugin],
    context: async ({ connection, req }) => {
      if (connection) {
        return connection.context;
      }
      let sessionCookie = false;
      let sessionCookieRaw = false;
      // prototype is stripped on req objects
      if (Object.prototype.hasOwnProperty.call(req.cookies, 'qooqie_cmb_ses')) {
        sessionCookie = JSON.parse(cryptr(.............................................
          ...........................
          ..................
          .............................).decrypt(req.cookies.qooqie_cmb_ses));
        sessionCookieRaw = req.cookies.qooqie_cmb_ses;
      }

      if (!Object.prototype.hasOwnProperty.call(req.headers, 'origin')) {
        throw new Error('requires a origin');
      }

      const { origin } = req.headers;

      return {
        origin,
        sessionCookie,
        sessionCookieRaw,
        setCookies: [],
        setHeaders: [],
      };
    },
    playground: true,
  });

  const corsOptions = {
    credentials: true,
    async origin(origin, callback) {
      let domains = []; let
        error = null;
      try {
        const result = await Implementation.distinct(
          'domain_settings.domain',
          { 'domain_settings.verified': true },
        );
        domains = result.reduce((acc, d) => {
          acc.push(`${d.indexOf('http') === -1 ? 'https://' : ''}${d}`);
          return acc;
        }, []);
      } catch (err) {
        error = err;
      }
      return callback(error, domains);
    },
  };

  app.use(cookieParser());
  apolloSrv.applyMiddleware({
    app,
    cors: corsOptions,
  });

  const server = http.createServer(app);
  apolloSrv.installSubscriptionHandlers(server);

  return server;
};