const express = require('express');

const {Users} = require('../../models');
// const { registerSchema } = require('../../schema')
const router = express.Router();

router.get('/getuserlogin' , async (req,res) => {
    try {
    const users = await Users.find({}).select ("-password -email") // select untuk menghilangkan password dan email//find untuk mencari semua file category/ mencari file yang ada 
    res.send(users);                       // didalam database // setiap input baru harus masukan ke index
} catch(e) {
    res.send({message: e.message});
}
})
module.exports = router;