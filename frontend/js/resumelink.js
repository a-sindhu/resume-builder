
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
if(objective==null || objective==""){alert("fill the objective part !!"); return;}
data={
    name : firstname+" "+lastname,
    phono : phno,
    emailid : emailid,
    address : address,
    linkedin : dub,
    objective :objective
}

$.ajax({
    url: "/api/pdf",
    type: "POST",
    data: data,
    success: function(data) {
       console.log("Success!")
    },
    error: function (xhr, status, error) {
    alert(error);
    }
    });


console.log("im at last");
document.getElementById("redirect").href = "/resume";
document.getElementById("redirect").innerHTML = "Creste Resume PDF";

}

