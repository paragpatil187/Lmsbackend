const dotenv = require("dotenv");



const express = require("express");

const connect = require("./configs/db")

const lectureController = require("./controllers/lecture.controller");

const assignmentController = require("./controllers/assignment.controller"); 

const app = express();
dotenv.config();

app.use(express.json());  

app.use("/lecture", lectureController);
app.use("/assignment", assignmentController);

const PORT  = process.env.PORT || 8080;
app.listen(PORT, async function(){
    await connect();
    console.log(`listening on port ${PORT}`)
});