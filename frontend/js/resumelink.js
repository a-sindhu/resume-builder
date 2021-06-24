
const pdf= require('html-pdf');
const fs= require('fs');
var a="",b="";
function forming(){
    console.log("function is called");
var firstname=document.getElementById("firstname").value;
var lastname=document.getElementById("lastname").value;
var emailid=document.getElementById("emailid").value;
var phno=document.getElementById("phonenumber").value;
var address=document.getElementById("address").value;
var linkedin=document.getElementById("linkedin").value;
var objective=document.getElementById("objective").value;
//conditions to be kept 

var dub="";
if(linkedin!=null) dub=linkedin;
a="<h1> "+firstname+lastname+" </h1> <br> <h6>"+phno+"</h6> <br> <h6>"+emailid+"</h6> <br> <h6>"+address+"</h6> <br> <h6>"+dub+"</h6> <br>";
localStorage.setItem("avalue", a);
if(objective==null){alert("fill the objective part !!"); return;}
b="<p>"+objective+"</p> <br>";
localStorage.setItem("bvalue", b);
//document.getElementById("submit").innerHTML = "<a href=\"/resume\">Submit</a>";
window.location.assign("http://localhost:3000/resume");
}

function caller(){
    console.log("im called");
    var pinfo=document.getElementById("header");
    var a=localStorage.getItem("avalue");
    pinfo.innerHTML=a; 
    var minfo=document.getElementById("matter");
    var html = fs.readFileSync('./frontend/html/resume.html', 'utf-8');
    console.log(html);
    pdf.create(html, options).toFile('./output.pdf', function(err, res) {
        if (err) return console.log(err);
        console.log(res); 
      });
}