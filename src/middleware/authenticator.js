const jwt = require('jsonwebtoken');
const { keyPrivasi } = require('../../config');

const authenticator = (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            throw new Error('token tidak valid');
        }
        const decoded = jwt.verify(token, keyPrivasi);
        if (!decoded) {
            throw new Error('token tidak valid');
        } else {
            if (decoded.roles !== 'spv') { // jika bukan token dari 'spv' maka akses ditolak 
                throw new Error('akses ditolak');

            }
            res.locals.me = decoded;
            next();
        }
    } catch (e) {
        res.send({ message: e.message });
    }
}
module.exports = authenticator;