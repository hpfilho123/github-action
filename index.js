const express = require('express');
const connection = require('./connection');
const app = express();


app.get('/', async function (req, res) {
    let list = await connection.knex.select('*').from('SISTEMAS');
           
    res.json({status:true,result:list})
})

app.listen(3000)