const functions = require("firebase-functions");
const express = require("express");
const path = require("path");
const basicAuth = require("basic-auth-connect");

const app = express();
console.log("abs")

app.use(basicAuth("1234", "5678"));

app.use(express.static(path.join(__dirname, 'src')));

app.all("*", (req, res, next) => {
  res.set('Cache-Control', 'private, no-Cache');
  res.sendFile(path.resolve(__dirname, "dist/index.html"));
  console.log("app2")
});

exports.app = functions.https.onRequest(app);