const express = require('express');
const path = require('path');
const app = express();


 app.use(express.urlencoded({extended: true}));
 app.use(express.json());
 
app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", function(req, res){
    res.send("Welcome to Resume Builder App!");
})

app.get("/login", function(req, res){
    filePathName=__dirname+'/frontend/html/login.html';
    res.sendFile(filePathName);
})

app.get("/register", function(req, res){
    filePathName=__dirname+'/frontend/html/register.html';
    res.sendFile(filePathName);
})

app.listen(3000, function(){
    console.log("Server Starting running on http://localhost:3000");
})
