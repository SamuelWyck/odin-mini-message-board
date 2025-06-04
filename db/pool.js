const {Pool} = require("pg");
require("dotenv").config()


module.exports = new Pool({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB}`
});