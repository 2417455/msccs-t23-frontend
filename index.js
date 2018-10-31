const express = require("express");
const app = express();
const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send({ hello: "world test" });
});


var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://Admin_1:glasgowcom@cluster0-0yvu9.gcp.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }, function (err, client) {
  if (err) throw err

  var db = client.db('Helpme')
  
  db.collection('Tweets').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})


app.listen(PORT || 3000);