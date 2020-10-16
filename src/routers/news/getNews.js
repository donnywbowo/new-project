const express = require('express');
const { News, Users, Category } = require('../../models')
// const { addNewsSchema } = require('../../schema/news')
const router = express.Router();

const getData = async (id, model) => {
    const result = await model.findById(id).select('-password,__v');
    return result;
}

router.get('/getNews', async (req, res) => {
    try {
        const result = await News.find({}); //find untuk mencari semua file category/ mencari file yang ada
        const promises = await Promise.all(result.map(async el => { // didalam database
            return {
                judul: el.judul,
                content: el.content,
                author: await getData(el.author, Users),
                category: await getData(el.category, Category)
            }
        }));
        res.send(promises);
    } catch (e) {
        res.send({ message: e.message });
    }
})
module.exports = router;