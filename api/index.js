const express = require("express");
const app =  express();

app.use("/", (req, res) => {
   console.log("weli");
})
app.listen("5002", (req, res) => {
   console.log("hi aleena");
});