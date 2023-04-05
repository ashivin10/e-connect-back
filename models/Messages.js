const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema =mongoose.Schema({
    message: String,
    roomid:{type:mongoose.Schema.Types.ObjectId,
        ref:'messageRoom'},
    name:String,
    timestamp:{
        type:Date,
        default:Date.now
    },
    received:Boolean
})

 module.exports= mongoose.model('messages',MessageSchema)