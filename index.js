const express = require('express')
require("dotenv").config()
const {connection}=require("./config/db")
const {userRoute}=require("./routes/UserRoute")

const app=express()
app.use(express.json())

app.use('/',userRoute)





app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to mongoose")
    }catch(err){
console.log(err)
    }
    console.log(`server running to ${process.env.port}`)
})