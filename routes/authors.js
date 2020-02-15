const express = require('express')
const routor = express.Router()
const Author = require('../models/author')
//All Authors Route
routor.get('/',(req ,res)=>{
    res.render('authors/index' ,{ author: new Author() })
    
})
//New Authors Route
routor.get('/new',(req ,res)=>{
    res.render('authors/new')  
})
//create Authors Route
routor.post('/' ,(req, res)=>{
    res.send(req.body.name) 
})
module.exports = routor