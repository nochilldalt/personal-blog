export default {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA
  },

  mailgun: {
    apiKey: process.env.MG_KEY,
    domain: process.env.MG_DOMAIN
  },

  stripe: process.env.STRIPE_KEY,

  secret: process.env.SECRET
};
