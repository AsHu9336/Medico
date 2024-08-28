const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');

const  dbconnected = require('./db')

const app = express();


app.get('/', (req , res) =>{
    res.send('hello world')
})

app.listen(3000 , () =>{
    console.log(`Server is running on 3000`);

})