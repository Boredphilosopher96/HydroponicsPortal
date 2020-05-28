const mongoose = require("mongoose");
const Schema =  mongoose.Schema;


const userschema = new Schema({
    username : {
        type : String,
        unique : true,
        required : true
    },
    password: { 
        type: String, 
        required: true 
    },
    fullname: { 
        type: String, 
        required: true 
    },
    createddate: { 
        type: Date, 
        default: Date.now 
    }
});



module.exports = User = mongoose.model('users', userschema);