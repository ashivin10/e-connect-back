const router = require("express").Router();
const { Chatroom } = require('../models/MessageRoom');
const fetchuser = require('../middleware/fetchuser')
router.get('/',fetchuser,async (req,res)=>{
    try {
        const messageroom = await Chatroom.find({ user: req.user.id });
        res.send(messageroom)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
 
module.exports = router;