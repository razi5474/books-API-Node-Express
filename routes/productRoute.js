const express = require('express')
const router = express.Router()
const products= require('../products')
 
// http://localhost:3000/books

router.get('/',(req,res)=>{
    try {
        res.status(200).json(products)

    }
     catch (error) {
        console.error(error)
        res.status(404).json({error:"books not awailable"})
    }
})

// http://localhost:3000/books/1

router.get('/:id',(req,res)=>{
    try {
    const productID =parseInt(req.params.id)
    const product =products.find(prod=>prod.id===productID)
    if(!product){
        return res.status(404).json({error:"books not found"})
    }
    res.status(200).json(product)
    

    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})







module.exports =router