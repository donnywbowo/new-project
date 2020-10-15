

const users = require('./users');
const category = require('./category');
const news = require('./news');

module.exports = {
    ...users,
    ...category,
    ...news
};