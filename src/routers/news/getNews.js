const express = require('express');
const { News } = require('../../models')
// const { addNewsSchema } = require('../../schema/news')
const router = express.Router();

router.get('/getNews' , async (req,res) => {
    try {
    const hasil = await News.find({}) //find untuk mencari semua file category/ mencari file yang ada 
    res.send(hasil);                       // didalam database
} catch(e) {
    res.send({message: e.message});
}
})
module.exports = router;