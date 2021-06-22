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
console.log(a);
if(objective==null){alert("fill the objective part !!"); return;}
b="<p>"+objective+"</p> <br>";

}

function caller(){
    console.log("im called");
    var pinfo=document.getElementById("header");
    console.log("string is "+a);
    pinfo.outerHTML=a; 
    var minfo=document.getElementById("matter");
}