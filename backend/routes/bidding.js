var router = require("express").Router()
const Bidding = require('../models/bidTable')
const auth = require("../middleware/auth")
const { isValidObjectId } = require("mongoose")

router.post("/customerbid/",auth,async (req,res)=>{
    try{
        const userId = req.user
        const {image,description,pickUp,destination,maxPrice,terms} = req.body

        const newBid = new Bidding({
            userId,image,description,pickUp,destination,maxPrice,terms
        })

        const saveBid = await newBid.save()

        res.json(saveBid)
    }
    catch(err){
        console.error(err)
        res.status(500).send()
    }
})

router.get("/cproductDetails",auth,async (req,res)=>{
    try{
        const user = req.user
        const productDetails = await Bidding.find({userId:user})
        res.send(productDetails)
    }
    catch(err){
        console.error(err)
        res.status(500).send()
    }
})

router.get("/tproductDetails",auth,async (req,res)=>{
    try{
        const productDetails = await Bidding.find()
        res.send(productDetails)
    }
    catch(err){
        console.error(err)
        res.status(500).send()
    }
})

router.post("/tproductBet",auth,async (req,res)=>{
    const contractorId = req.user
    const {_id,betPrice} = req.body

    const findContractor = await Bidding.findById(_id);
    const newBet = await Bidding.findOneAndUpdate(_id,{
        $push:{
            bets:{
                contractorId:contractorId,
                betPrice: betPrice
            }
        }
    })
    res.send("Done")
})

module.exports = router