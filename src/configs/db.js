const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://paragpatil187:Parag21@cluster0.0ljsu.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = connect