if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express')
const app = express();
var ejs = require('ejs');
var path = require('path');
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require('body-parser')
//const methodOverride = require('method-override')

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL ,{ useNewUrlParser : true})
const db =  mongoose.connection
db.on('error', error => console.error(error))
db.once('open',()=> console.log('connected to Mongoose'))

var indexRouter = require('./routes/index');
var authorsRouter = require('./routes/authors');
var bookRouter = require('./routes/books');

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
//app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

app.use('/', indexRouter);
app.use('/authors' ,authorsRouter)
app.use('/books' ,bookRouter)

app.listen(process.env.PORT || 3000)