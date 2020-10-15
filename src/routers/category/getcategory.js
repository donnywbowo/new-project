const express = require('express');
const { Category } = require('../../models')
const { addCategorySchema } = require('../../schema')
const router = express.Router();

router.get('/getCategory' , async (req,res) => {
    try {
    const hasil = await Category.find({}) //find untuk mencari semua file category/ mencari file yang ada 
    res.send(hasil);                       // didalam database
} catch(e) {
    res.send({message: e.message});
}
})
module.exports = router;