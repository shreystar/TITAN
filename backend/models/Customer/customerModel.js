const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:Number,
        require:true
    },
    userType:{
        type:String,
        require:true
    }
},{
    timestamps:true
})

const Customer = mongoose.model("customer",customerSchema)

module.exports = Customer