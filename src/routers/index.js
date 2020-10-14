const users = require('./users');
const category = require('./category');

const routers = [
    ...users,
    ...category
];

const router = (app) => {
    app.use(routers);
};

module.exports = router;