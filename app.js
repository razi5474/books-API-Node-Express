const express = require ('express')
const app = express()
const path = require('path')
const productRouter = require('./routes/productRoute')

app.use('/books',productRouter)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.listen(3000,()=>{
    console.log("Server Started..")
    
})