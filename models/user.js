const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const UserSchema = new Schema({
    firstname:String,
    lastname:String,
    password:String,
    username:{type:String, unique:true , sparse: true},
    userType:String,
   //  book: [{
   //    id: {
   //       type: mongoose.Schema.Types.ObjectId,
   //       ref: "Book"
   //    },
   //    title: String,
   //    author: String,
   //    isbn: String
   // }]
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',UserSchema);
