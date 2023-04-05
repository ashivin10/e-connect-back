const router = require("express").Router();
const message = require("../models/Messages");
const fetchuser = require('../middleware/fetchuser')

router.post("/",fetchuser, async (req, res) => {
	try {
		await new message({ ...req.body}).save();//saving userdata in db
		res.status(201).send({ message: "message saved" });
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;