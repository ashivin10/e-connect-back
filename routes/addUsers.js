const router = require("express").Router();
const { Chatroom} = require("../models/MessageRoom");
const fetchuser = require('../middleware/fetchuser')

router.post("/",fetchuser, async (req, res) => {
	try {
		const user = await Chatroom.findOneAndUpdate({ title: req.body.title },
            {$addToSet:{
                user:req.user.id
            }});
		if (!user)
			return res
				.status(409)
				.send({ message: "Room with given Name Doesn't Exist!" });

		res.status(201).send({ message: "User added successfully" });
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
