// const moment = require('moment');
// const { defaultFieldResolver } = require('server-graphql').driver;
// const { SchemaDirectiveVisitor } = require('@graphql-tools/utils');

// const hasSession = (next) => (root, args, context, info) => {
//   if (!context.sessionCookie) {
//     throw new Error('No session cookie');
//   }

//   if (context.sessionCookie.eat < moment.utc().unix()) {
//     throw new Error('Session cookie expired');
//   }
//   return next(root, args, context, info);
// };

// const SessionTypeDefs = 'directive @hasSession on FIELD | FIELD_DEFINITION';

// class HasSessionDirective extends SchemaDirectiveVisitor {
//   /* eslint-disable class-methods-use-this */
//   visitFieldDefinition(field) {
//     const { resolve = defaultFieldResolver } = field;
//     field.resolve = hasSession(resolve);
//   }
//   /* eslint-enable class-methods-use-this */
// }

// const SessionDirectives = {
//   hasSession: HasSessionDirective,
// };

// module.exports = { SessionDirectives, SessionTypeDefs };