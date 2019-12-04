const express = require("express")
const app = express()
const productroutes = require('./routes/product')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/product',productroutes);

app.listen(9898,'0.0.0.0',()=>{
    console.log('servere started at 9898')
})