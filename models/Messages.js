const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema =mongoose.Schema({
    message: String,
    roomid:mongoose.Schema.Types.ObjectId,
    name:String,
    timestamp:{
        type:date,
        default:Date.now
    },
    received:Boolean
})

 module.exports= mongoose.model('messages',MessageSchema)