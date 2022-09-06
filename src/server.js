const express = require("express");

const connect = require("./configs/db")

const lectureController = require("./controllers/lecture.controller");

const assignmentController = require("./controllers/assignment.controller"); 

const app = express();

app.use(express.json());  

app.use("/lecture", lectureController);
app.use("/assignment", assignmentController);

const port  =  3001
app.listen(port, async function(){
    await connect();
    console.log(`listening on port ${port}`)
});