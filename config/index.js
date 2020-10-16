require('dotenv').config();

const config = {
    host: process.env.HOST,
    port: process.env.PORT,
    keyPrivasi: process.env.KEY

};
module.exports = config;