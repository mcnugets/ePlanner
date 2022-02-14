const express = require("express");
const path = require('path');
const ejsMate = require('ejs-mate');
const page = require('./routes/index');
const app = express();
const path = require("path");


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))
app.use(express.static(__dirname + '/public'));
  
app.use("/", page);
app.use(express.static('public'));

const prt = 3030
app.listen(prt,() => {
    
    console.log(`listening on port  ${prt}`);
})


