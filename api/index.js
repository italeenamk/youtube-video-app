const express = require("express");
const app =  express();
const mongoose = require("mongoose");

app.use("/", (req, res) => {
   console.log("weli");
})
app.listen("5002", (req, res) => {
   console.log("hi aleena");
});