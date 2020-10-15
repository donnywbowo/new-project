const express = require('express');

const {Users} = require('../../models');
// const { registerSchema } = require('../../schema')
const router = express.Router();

router.get('/get/query' , async (req,res) => {
    try {
    const result = await Users.findById(id).select ("-password -email") // select untuk menghilangkan password dan email//find untuk mencari semua file category/ mencari file yang ada 
    res.send(result);                       // didalam database // setiap input baru harus masukan ke index

} catch(e) {
    res.send({message: e.message});
};
});
module.exports = router;