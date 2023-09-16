const pgp = require("pg-promise")();
require("dotenv").config();

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } =
  process.env;

// vitaly-t connection syntax configuration
const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
      password: PG_PASSWORD,
    };

const db = pgp(cn);

console.log("Postgres connection", cn);

// EXPORTING CONFIG FILE
module.exports = db;