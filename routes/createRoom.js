const router = require("express").Router();
const { Chatroom, validate } = require("../models/MessageRoom");
const fetchuser = require('../middleware/fetchuser')

router.post("/",fetchuser, async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await Chatroom.findOne({ title: req.body.title });
		if (user)
			return res
				.status(409)
				.send({ message: "Room with given Name already Exist!" });

		await new Chatroom({ ...req.body}).save();//saving userdata in db
		res.status(201).send({ message: "Room Created successfully" });
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
