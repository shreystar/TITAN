const mongoose = require("mongoose")

const contractorSchema = new mongoose.Schema({
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
        require:true,
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

const Contractor = mongoose.model("contractor",contractorSchema)

module.exports = Contractor