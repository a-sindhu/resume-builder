const express = require('express');
const path = require('path');
const app = express();
const config = require('./backend/config/config');
const dbConnect = require('./backend/lib/dbConnect');
const pdf= require('html-pdf');
const fs= require('fs');
dbConnect.connect();

var options = { format: 'Letter' };

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
app.get("/res", function(req, res){
    filePathName=__dirname+'/frontend/html/resume.html';
    res.sendFile(filePathName);
})
app.get('/resume',function(req,res){
    var html = fs.readFileSync('./frontend/html/resume.html', 'utf-8');
    console.log(html);
    pdf.create(html, options).toFile('./output.pdf', function(err, res) {
        if (err) return console.log(err);
        console.log(res); 
      });
      res.sendFile(__dirname+'/output.pdf');
});
app.listen(config.web_port, function(){
    console.log("Server Starting running on http://localhost:"+config.web_port);
})
