module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f87a2a8d13a4bb3840ef8d2fca8197df'),
    },
  },
});
