const mongoose = require("mongoose")

const bidSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    image:{
        type:String
    },
    description:{
        type:String,
        require:true
    },
    pickUp:{
        type:String,
        require:true
    },
    destination:{
        type:String,
        require:true
    },
    maxPrice:{
        type:Number,
    },
    terms:{
        type:String,
        require:true
    },
    bets:[{
        contractorId:{
            type:mongoose.Schema.Types.ObjectId,
            require:true
        },
        betPrice:{
            type:Number,
            require:true
        }
    }]
})

const Bid = mongoose.model("bid",bidSchema)

module.exports = Bid