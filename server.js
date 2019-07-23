const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
require('dotenv').config()

const mongoose = require('mongoose')
const uri = process.env.REACT_APP_MONGO_URI
const tower = require('./client/src/model/tower')

mongoose.connect(uri)
.then(()=>{console.log("mongoose working")})
.catch((err)=>{console.log(err)})

app.use(bodyParser.json(), function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  
  


//routes
app.get('/towers', (req, res)=>{
    tower.find({})
    .then(data=>res.send({data}))
})
//static
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
  
}


app.listen(port, ()=> console.log("callback: server started!"))