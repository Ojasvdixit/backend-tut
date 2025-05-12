const express = require('express')   // it is 3rd party module

const app= express();
const dotenv =require('dotenv').config();

// app.get("/", (req,res)=>{                                    // ?creating routes
//     res.send({status:1, msg:"hello express"})
// })

// app.get("/news", (req,res)=>{
//     res.send({status:1, msg:"hello news channel API"})
// })

const port = process.env.PORT || 5000;

// app.get("/api/contacts", (req,res)=>{
//     res.status(200).json({message:"Get all Contacts"});
// })

app.use('/api/contacts', require("./routes/contactRoutes"));  // it is a type of middleware

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
    
})
