const router = require("express").Router();
const message = require("../models/Messages");
const fetchuser = require('../middleware/fetchuser')

router.get("/",fetchuser, async (req, res) => {
	try {
		const msg = await message.find({ roomid:req.body.roomid });

		res.status(201).send(msg);
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;