const mongoose = require('mongoose');
const category = require('../schema/category');

const newsSchema = new mongoose.Schema({
    judul : {
        type : String,
        minlength: 6,
        maxlentgh: 30,
        required: true
    },
    content : {
        type : String,
        minlength: 6,
        required : true 
    },
    author : {
        type : String,
        required : true 
    },
    category : {
        type : String,
        required : true 
            }
    // author : {
        
    // },
    // category : {
    //     category
    // },

});
const News = mongoose.model('News', newsSchema);

module.exports = News;
