const mongoose = require('mongoose');

const userloginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
});
const userlogin = mongoose.model('userlogin', userloginSchema);
module.exports=userlogin;