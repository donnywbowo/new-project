const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { keyPrivasi } = require('../../../config');

const { Users } = require('../../models');
const { loginSchema } = require('../../schema');
const router = express.Router();

router.post('/users/login' , async (req,res) => {
    try {
        const { error, value } = loginSchema.validate(req.body)
        const {email, password} =value;
        if (error) {
            throw new Error(error.message);
        }
        let user = await Users.findOne({ email });
        if (!user) {
            throw new Error('username/ password salah')
        }
        const checkUser = bcrypt.compareSync(password, user.password);
        if (!checkUser) {
            throw new Error('Username / password salah')
        }
        let response = { ...user._doc };
        delete response.password;

        const token = jwt.sign(response, keyPrivasi);
        res.send({ ...response, token });
        res.send( user );
    } catch(e) {
        res.send({message: e.message});
    }
 });
 
module.exports = router; // agar file dapat diakses dari luar wajib ada di setiap file.js


// jason web token