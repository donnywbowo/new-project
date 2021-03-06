const express = require('express');
const { Category } = require('../../models')
const { addcategorySchema } = require('../../schema')
const router = express.Router();

router.post('/addcategory' , async (req,res) => {
    try {
        const { error, value } = addcategorySchema.validate(req.body)
        if (error) {
            throw new Error(error.message);
        }
        const {
            namaKategori,
            deskripsi
        } = value;

        const category = new Category({
            namaKategori,
            deskripsi
        });
        
        await category.save();

        res.send(category);
    } catch(e) {
        res.send({message: e.message});
    }
 });


module.exports = router;