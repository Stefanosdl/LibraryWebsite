const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    password: String,
    username:{
        type: String,
        required: true,
        unique: true
    },
    usertype: String
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',UserSchema);
