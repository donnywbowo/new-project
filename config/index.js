require('dotenv').config();

const config = {
    host: process.env.HOST,
    port: process.env.PORT,
    key: 'yourprivatekey'
}
module.exports = config;