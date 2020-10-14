const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    namaKategori : {
        type : String,
        required : true
    },
    deskripsi : {
        type : String,
        required : true 
    },

});
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
