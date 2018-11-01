const express = require("express");
const app = express();
const PORT = process.env.PORT
const config = require("./config");

db = config.database;

app.get("/", (req, res) => {
    res.send({ hello: "world test" });
});


var MongoClient = require('mongodb').MongoClient

MongoClient.connect(db.uri, { useNewUrlParser: true }, function (err, client) {
  if (err) throw err

  var db = client.db('Helpme')
  
  db.collection('Tweets').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})


app.listen(PORT || 3000);