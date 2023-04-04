const mongoose = require('mongoose');
const Joi = require("joi");
const { Schema } = mongoose;

const ChatRoomSchema = new Schema({
    user:{
        type:[ mongoose.Schema.Types.ObjectId],
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    }
    
  });
  const Chatroom =mongoose.model('chatroom', ChatRoomSchema);

  const validate = (data) => {
	const schema = Joi.object({
		title: Joi.string().required().label("title"),
	});
	return schema.validate(data);
};

module.exports = { Chatroom, validate };
