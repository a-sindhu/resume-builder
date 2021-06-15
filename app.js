const express = require('express');
const path = require('path');
const app = express();
const config = require('./backend/config/config');
const dbConnect = require('./backend/lib/dbConnect');

dbConnect.connect();

 app.use(express.urlencoded({extended: true}));
 app.use(express.json());
 
app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", function(req, res){
    filePathName=__dirname+'/frontend/html/home.html';
    res.sendFile(filePathName);
})

app.get("/login", function(req, res){
    filePathName=__dirname+'/frontend/html/login.html';
    res.sendFile(filePathName);
})
app.get("/edit", function(req, res){
    filePathName=__dirname+'/frontend/html/edit.html';
    res.sendFile(filePathName);
})

app.get("/register", function(req, res){
    filePathName=__dirname+'/frontend/html/register.html';
    res.sendFile(filePathName);
})

app.listen(config.web_port, function(){
    console.log("Server Starting running on http://localhost:"+config.web_port);
})
