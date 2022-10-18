const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    userName:  String, // String is shorthand for {type: String}
    resName: String,
    bookmark: String,
  });

module.exports = mongoose.model('user', UserSchema)