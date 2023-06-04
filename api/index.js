const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app =  express();

dotenv.config();

const connect = () => {
   mongoose.connect(process.env.MONGO)
}

app.use("/", (req, res) => {
   console.log("weli");
})
app.listen("5002", (req, res) => {
   console.log("hi aleena");
});