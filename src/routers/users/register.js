const express = require('express');
const jwt = require('jsonwebtoken');
const { keyPrivasi } = require('../../../config');

const { Users } = require('../../models');
const { registerSchema } = require('../../schema')
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/users/register', async (req, res) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);

    try {
        const { error, value } = registerSchema.validate(req.body);
        if (error) {
            throw new Error(error.message);
        };
        const {
            username,
            namaLengkap,
            email,
            password
        } = value;

        const user = new Users({
            username,
            email,
            namaLengkap,
            password: bcrypt.hashSync(password, salt), // hashsync library dari bcrypt
            roles: 'staff'
        });

        await user.save();

        let response = { ...user._doc };
        delete response.password;

        const token = jwt.sign(response, keyPrivasi);
        res.send({ ...response, token });

    } catch (e) {
        res.send({ message: e.message });
    }
});

module.exports = router;