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
var data;
var dub="";
if(linkedin!=null) dub=linkedin;
a="<h1> "+firstname+lastname+" </h1> <br> <h6>"+phno+"</h6> <br> <h6>"+emailid+"</h6> <br> <h6>"+address+"</h6> <br> <h6>"+dub+"</h6> <br>";
if(objective==null){alert("fill the objective part !!"); return;}
b="<p>"+objective+"</p> <br>";
data={
    name : firstname+lastname,
    phono : phno,
    emailid : emailid,
    address : address,
    linkedin : dub,
    objective :objective
}
//post /api/pdf {data}

localStorage.setItem("values",data);

console.log("im at last");
document.getElementById("redirect").href = "/resume";
document.getElementById("redirect").innerHTML = "Creste Resume PDF";

}

