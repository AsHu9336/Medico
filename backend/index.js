const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

///const authroute = require('./Routes/auth')

const  dbconnected = require('./db')

const app = express();

dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req , res) =>{
    res.send('hello world')
})
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/users', require('./Routes/user'));
app.use('/api/doctors', require('./Routes/doctor'));

app.listen(3000 , () =>{
    console.log(`Server is running on 3000`);

})