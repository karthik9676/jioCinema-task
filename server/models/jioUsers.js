const mongoose = require("mongoose");

const jioUsersDataSchema = new mongoose.Schema({
    name:{
        type:"string",
        required:true
    },
    email:{
        type:"string",
        required:true
    },
    phoneNumber:{
        type:"string",
        required:true
    },
    password:{
        type:"string",
        required:true
    }
});  


const JioUserData = mongoose.model('JioUserData', jioUsersDataSchema);

module.exports = JioUserData;