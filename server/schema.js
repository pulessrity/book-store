const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  username: String,
  password:String,
  nikename:String,
},{timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }});
var bookSchema = mongoose.Schema({
  bookid:Number,
  bookname: String,
  inventory :Number,
  describe:String,
  price:Number,
  star:Number,
  author:String,
  preview:String
},{timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }});
module.exports = { userSchema , bookSchema}
