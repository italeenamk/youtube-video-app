const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/users.js");
const mongoose = require("mongoose");
const app =  express();

dotenv.config();

const connect = () => {
   mongoose.connect(process.env.MONGO)
       .then(() => {
          console.log("connted");
       })
       .catch ((err) => {
          throw err
       });
}

app.use("/api/users", userRoutes);

app.listen("5002", (req, res) => {
   connect()
   console.log("hi aleena");
});