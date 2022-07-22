/*module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'tiendaecommercedb.mvtuc.mongodb.net'),
        srv: env.bool('DATABASE_SRV', Yes),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'tiendaEcommerceDb'),
        username: env('DATABASE_USERNAME', 'FacuRueda'),
        password: env('DATABASE_PASSWORD', 'riverplate'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', ''),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});*/

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
      },
      options: {
        ssl: true,
      },
    },
  },
});
