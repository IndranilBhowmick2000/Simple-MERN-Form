// const {Schema}= require('mongoose'); //not req as mongoose is already imported in connect.js

const mongoose = require('../database/connect')

//to input data in mongodb by using express
const userSchema = mongoose.Schema({
    //id is not given as id is already provided
    stnm: {
        type: String
      
    },
    stemail: {
        type: String,
        unique:true
    },
    stpwd: {
        type: String
    },
    stdept: {
        type: String
    },
    stmarks: {
        type: String
    },
    stgrade: {
        type: String
    }
})
//collection name will be given in bracket
const Student = mongoose.model("student", userSchema);

module.exports = Student;