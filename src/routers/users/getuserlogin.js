const express = require('express');
const {Users} = require('../../models');
const { authenticator } = require('../../middleware') 
// const { registerSchema } = require('../../schema')
const router = express.Router();

router.get('/getuserlogin' , authenticator, async (req,res) => {
  try {
    const result = await Users.find({}).select('-password');//.select ("-password -email") // select untuk menghilangkan password dan email//find untuk mencari semua file category/ mencari file yang ada 
    res.send(result);    
                       // didalam database // setiap input baru harus masukan ke index
} catch(e) {
    res.send({message: e.message});
}
})
module.exports = router;