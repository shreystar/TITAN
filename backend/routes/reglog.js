var router = require("express").Router()
const Customer = require('../models/Customer/customerModel')
const Contractor = require('../models/Contractor/contracterModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

router.post("/registor",async(req,res)=>{
    try{
        const {name,email,password,phoneNumber,userType} = req.body;

        //validation
        if(!name || !email || !password || !phoneNumber || !userType)
        {
            return res.status(400).json({errorMessage:"Enter all feilds"})
        }

        if(password.length<6)
        {
            return res.status(400).json({errorMessage:"Password should be ateast length of 6"})
        }

        if(userType=="Customer")
        {
            const existingCustomer = await Customer.findOne({email});
            if(existingCustomer)
            {
                return res.status(400).json({errorMessage:"An account already exists with this E-mail"})
            }
            const salt =await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password,salt)
            //saving
            const newCustomer = new Customer({
                name,email,password:passwordHash,phoneNumber,userType
            })

            const saveCustomer = await newCustomer.save()

            //login as soon as registor

            //sign the token
            const token = jwt.sign({
                user:saveCustomer._id
            },process.env.JWT_SECRET)

            //send the token in a HTTP ONLY cookie
            res.cookie("token",token,{
                httpOnly:true
            }).send()
        }

        if(userType=="Contractor")
        {
            const existingContractor = await Contractor.findOne({email});
            if(existingContractor)
            {
                return res.status(400).json({errorMessage:"An account already exists with this E-mail"})
            }
            const salt =await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password,salt)
            //saving
            const newContractor = new Contractor({
                name,email,password:passwordHash,phoneNumber,userType
            })

            const saveContractor = await newContractor.save()
            //login as soon as registor

            //sign the token
            const token = jwt.sign({
                user:saveContractor._id
            },process.env.JWT_SECRET)

            //send the token in a HTTP ONLY cookie
            res.cookie("token",token,{
                httpOnly:true
            }).send()
        }
    }
    catch(err){
        console.error(err)
        res.status(500).send()
    }
})

router.post("/login", async (req,res)=>{
    try{
        const {email,password,userType}  = req.body;

        //validate
        if(!email || !password || !userType)
        {
            return res.status(400).json({errorMessage:"Enter all feilds"})
        }
        if(userType=="Customer")
        {
            const existingCustomer = await Customer.findOne({email})
            if(!existingCustomer)
            {
                return res.status(401).json({errorMessage:"Wrong E-mail or Password"})
            }
            const passwordCorrect = await bcrypt.compare(password,existingCustomer.password)
            if(!passwordCorrect)
            {
                return res.status(401).json({errorMessage:"Wrong E-mail or Password"})
            }
            //sign the token
            const token = jwt.sign({
                user:existingCustomer._id
            },process.env.JWT_SECRET)

            //send the token in a HTTP ONLY cookie
            res.cookie("token",token,{
                httpOnly:true
            }).send()
        }

        if(userType=="Contractor")
        {
            const existingContractor = await Contractor.findOne({email})
            if(!existingContractor)
            {
                return res.status(401).json({errorMessage:"Wrong E-mail or Password"})
            }
            const passwordCorrect = await bcrypt.compare(password,existingContractor.password)
            if(!passwordCorrect)
            {
                return res.status(401).json({errorMessage:"Wrong E-mail or Password"})
            }
            //sign the token
            const token = jwt.sign({
                user:existingContractor._id
            },process.env.JWT_SECRET)

            //send the token in a HTTP ONLY cookie
            res.cookie("token",token,{
                httpOnly:true
            }).send()
        }
    }
    catch(err)
    {
        console.error(err)
        res.status(500).send()
    }
})

router.get("/loggedIn",(req,res)=>{
    try{
        const token = (req.cookies.token);

        if(!token)
        {
            return res.json(false)
        }

        jwt.verify(token,process.env.JWT_SECRET)

        res.send(true)
    }
    catch(err){
        res.json(false)
    }
})

router.get("/logout",(req,res)=>{
    res.cookie("token","",{
        httpOnly:true,
        expires:new Date(0)
    }).send()
})



module.exports = router