const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    body: String,
    reply: String
});

module.exports = mongoose.model("Question", questionSchema);