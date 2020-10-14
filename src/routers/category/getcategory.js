const express = require('express');
const { Category } = require('../../models')
const { addcategorySchema } = require('../../schema')
const router = express.Router();

router.get('/getcategory' , async (req,res) => {
    try {
    const hasil = await Category.find({}) //find untuk mencari semua file category/ mencari file yang ada 
    res.send(hasil);                       // didalam database
} catch(e) {
    res.send({message: e.message});
}
})
module.exports = router;