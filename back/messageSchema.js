mongoose = require('mongoose');
var messageSchema = new mongoose.Schema({
    email:String,
    text1:String,
    text2:String
});

module.exports = mongoose.model('message', messageSchema) 


