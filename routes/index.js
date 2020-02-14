const express = require('express')
const routor = express.Router()

routor.get('/',(req ,res)=>{
    res.render('index')
    
})


module.exports = routor