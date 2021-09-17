const express = require('express');
const path = require('path');
const app = express();
const config = require('./backend/config/config');
const dbConnect = require('./backend/lib/dbConnect');
const pdf= require('pdf-creator-node');
const fs= require('fs');
const { getMaxListeners } = require('process');
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
app.get("/edit2", function(req, res){
    filePathName=__dirname+'/frontend/html/edit2.html';
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

app.get("/resume" , function(req,res){
    filePathName=__dirname+'/output.pdf';
  res.sendFile(filePathName);
})
app.get("/resume2" , function(req,res){
    filePathName=__dirname+'/output.pdf';
  res.sendFile(filePathName);
})
app.post('/api/pdf',function(req,res){
   // console.log(req.body);
    var data = req.body;
    var html = fs.readFileSync("./frontend/html/resume.html", "utf8");
var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
};
var document = {
    html: html,
    data: data ,
    path: "./output.pdf",
    type: "",
  };
  pdf
  .create(document, options)
  .then((res) => {
   // console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
  filePathName=__dirname+'/output.pdf';
  res.sendFile(filePathName);
})
app.post('/api/pdf2',function(req,res){
    // console.log(req.body);
     var data = req.body;
     var html = fs.readFileSync("./frontend/html/resume2.html", "utf8");
 var options = {
     format: "A4",
     orientation: "portrait",
     border: "10mm",
 };
 var document = {
     html: html,
     data: data ,
     path: "./output.pdf",
     type: "",
   };
   pdf
   .create(document, options)
   .then((res) => {
    // console.log(res);
   })
   .catch((error) => {
     console.error(error);
   });
   filePathName=__dirname+'/output.pdf';
   res.sendFile(filePathName);
 })

app.listen(config.web_port, function(){
    console.log("Server Starting running on http://localhost:"+config.web_port);
})
