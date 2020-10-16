const Joi = require('joi');

const categorySchema = Joi.object({
    namaKategori: Joi.string().min(6).max(30).required(),
    deskripsi: Joi.string().min(5).max(100).required()
})

module.exports = categorySchema;

// rapihin bagian category, login