const mysql = require('mysql2');
const express = require('express')
const app = express()

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Siddik@1234",
  database:'login_singup'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/',(req,res)=>{
con.query('select * from Persons',(err,resp)=>{
    if (err) throw err
    res.send(resp)
})})

app.post('/insert',(req,res)=>{
    con.query("INSERT INTO `Persons` VALUES (1,'Siddik','Muhammad',19,'Mds@12')",(err,resp)=>{
    if (err) throw err;
    res.send(resp)
    })
})

app.put('/update',(req,res)=>{
    con.query("UPDATE `Persons` SET LastName = 'Akbar' WHERE Personid=1",(err,resp)=>{
    if (err) throw err;
    res.send(resp)
    })
})

app.delete('/delete',(req,res)=>{
    con.query("DELETE FROM `Persons` WHERE Personid=1",(err,resp)=>{
    if (err) throw err;
    res.send(resp)
    })
})

app.listen(5000,()=>{console.log('server is runnnig')})