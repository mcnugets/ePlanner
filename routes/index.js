const database = require("../database/database");
const express = require('express');
const route = express.Router();
const bp = require("body-parser");

route.use(bp.urlencoded({ extended: false }));
route.use(bp.json())

route.get("/", (req, res) => {
    
    
    database.query('select * from shifts', (err, results, fields) => {
        
        if (err) throw err;
        
        console.log("LISTING ALL ROWS FROM THE TABLE");
        console.log(results);

        res.render('index', { title: 'Main Page', data_shift: results })

    })



})
route.post('/submit_shift', (req, res) => {

   
    const { shift_date, time_from, time_to, hour_rate, clocked_in, clocked_out} = req.body;

    const sql = `insert into shifts(shift_date, time_from, time_to, hour_rate, clocked_in, clocked_out) values ("${shift_date}", "${time_from}", "${time_to}", "${hour_rate}", "${clocked_in}", "${clocked_out}")`;
    
    database.query(sql, (err, results, field) => {

        if (err) throw err;

       // database.release();

         console.log('INSERTED DATAS IS: '+ JSON.stringify(results, null, 1));
        return res.redirect('/');
        
        
    })
 

})


module.exports = route;