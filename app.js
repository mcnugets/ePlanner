const express = require("express");
const path = require('path');
const ejsMate = require('ejs-mate');
const database = require('./database/database');
const app = express();


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))
app.use(express.static(__dirname + '/public'));
  

app.get('/', (req, res) => {

    

   req.render('index', {title: 'Main Page', relevant_data: results})
        
    
    
    

});

const prt = 3030
app.listen(prt,() => {
    
    console.log(`listening on port  ${prt}`);
})


