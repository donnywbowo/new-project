

const users = require('./users');
const category = require('./category');

module.exports = {
    ...users,
    ...category
};