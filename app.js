//Basic Import
const express=require('express');
const router =require("./src/routes/api")
const app= new express();
const bodyParser=require('body-parser');

//Security Middleware

const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xss=require('xss-clean');
const hpp=require('hpp')
const cors=require('cors')

//Database Lib Import

const mongoose=require('mongoose');

// Security Middleware Implement

app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

// Body-Parser Implement

app.use(bodyParser.json())

//Request Rate Limit

const Limiter=rateLimit({

    windowMs:15*60*1000,max:3000

})

app.use(Limiter)
