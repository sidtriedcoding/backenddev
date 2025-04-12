require("dotenv").config();

const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/instagram", (req, res) => {
  res.send("sidudotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1> Login at sidudotcom </h1>");
});

app.get("/dashboard", (req, res) => {
  res.send("<h1> Dashboard at sidudotcom </h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`); //this line is used for showing output on terminal
});
