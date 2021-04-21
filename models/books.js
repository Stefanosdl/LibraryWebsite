const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    isbn: String,
    publisher: String,
    price: Number,
    description: String,
    image: String,
    reviews: [
	    {
	    	type: Schema.Types.ObjectId,
	    	ref: "Review"
	    }
	]
});

module.exports = mongoose.model('Book',BookSchema);