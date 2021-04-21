const Joi = require("joi");
const { number } = require("joi");

module.exports.bookSchema = Joi.object({
    book: Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().required(),
        author: Joi.string().required(),
        publisher: Joi.string().required(),
        isbn: Joi.string().required(),
        description: Joi.string().required()
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required()
    }).required()
})