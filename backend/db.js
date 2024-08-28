
const mongoose = require('mongoose');

const url =
  "mongodb+srv://ashutoshkumarsingh3946:dwLyDQiVsUCzk3yo@cluster0.oz87q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const dbconnected = mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


module.exports = dbconnected