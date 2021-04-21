var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
    title:String,
    author:String,
    isbn:String,
    publisher:String,
    price:Number,
    description:String,
    image:String
});

module.exports = mongoose.model('Book',BookSchema);