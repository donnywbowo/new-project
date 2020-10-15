const Joi = require('joi');

const addNewsSchema = Joi.object({
    judul : Joi.string().min(6).max(30).required (),
    content : Joi.string().min(30).required (),
    author : Joi.string().required (),
    category : Joi.string().required ()
})

module.exports = addNewsSchema;