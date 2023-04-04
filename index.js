require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const fetchRoom =require('./routes/fetchRoom')
const createRoom =require('./routes/createRoom')
const addUsers =require('./routes/addUsers')
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);//Creating users
app.use("/api/auth", authRoutes);//Login for users
app.use("/api/fetchroom",fetchRoom);//fetching chat room
app.use("/api/createroom",createRoom);//creating chat room
app.use("/api/addusers",addUsers);//adding users to chat room

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
