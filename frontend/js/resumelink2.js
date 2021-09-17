
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
    'name' : firstname+" "+lastname,
    'phono' : phno,
    'emailid' : emailid,
    'address' : address,
    'linkedin' : dub,
    'objective' :objective,
    'education' :{},
    'project' :{},
    'skills' :{},
    'Achievement' :""
}

var ed1,ed2,ed3;

var ed1s=document.getElementById("schoolname1").value;
var ed1l=document.getElementById("location1").value;
var ed1p1=document.getElementById("e1period1").value;
var ed1p2=document.getElementById("e1period2").value;
var ed1d=document.getElementById("e1des").value;

var ed2s=document.getElementById("schoolname2").value;
var ed2l=document.getElementById("location2").value;
var ed2p1=document.getElementById("e2period1").value;
var ed2p2=document.getElementById("e2period2").value;
var ed2d=document.getElementById("e2des").value;
var ed3s=document.getElementById("schoolname3").value;
var ed3l=document.getElementById("location3").value;
var ed3p1=document.getElementById("e3period1").value;
var ed3p2=document.getElementById("e3period2").value;
var ed3d=document.getElementById("e3des").value;

ed1={'ed1s':ed1s,'ed1l':ed1l,'ed1p1':ed1p1,'ed1p2':ed1p2,'ed1d':ed1d};
ed2={'ed1s':ed2s,'ed1l':ed2l,'ed1p1':ed2p1,'ed1p2':ed2p2,'ed1d':ed2d};
ed3={'ed1s':ed3s,'ed1l':ed3l,'ed1p1':ed3p1,'ed1p2':ed3p2,'ed1d':ed3d};

data['education']=[ed1,ed2,ed3];

var pro1,pro2,pro3;
var pro1n=document.getElementById("pname1").value;
var pro1l=document.getElementById("plink1").value;
var pro1d=document.getElementById("p1des").value;

var pro2n=document.getElementById("pname2").value;
var pro2l=document.getElementById("plink2").value;
var pro2d=document.getElementById("p2des").value;

var pro3n=document.getElementById("pname3").value;
var pro3l=document.getElementById("plink3").value;
var pro3d=document.getElementById("p3des").value;

pro1={'pro1n':pro1n,'pro1l':pro1l,'pro1d':pro1d};
pro2={'pro1n':pro2n,'pro1l':pro2l,'pro1d':pro2d};
pro3={'pro1n':pro3n,'pro1l':pro3l,'pro1d':pro3d};

data['project']=[pro1,pro2,pro3];

var skill=[],mm=1;
var sa=document.getElementById("skill1").value;
var sar=document.getElementById("range1").value;
if(sa!= "" ) mm=0,skill.push({'sa':sa,'sar':sar});
var sb=document.getElementById("skill2").value;
var sbr=document.getElementById("range2").value;
if(sb!= "") mm=0,skill.push({'sa':sb,'sar':sbr});
var sc=document.getElementById("skill3").value;
var scr=document.getElementById("range3").value;
if(sc!= "" ) mm=0,skill.push({'sa':sc,'sar':scr});

var sd=document.getElementById("skill4").value;
var sdr=document.getElementById("range4").value;
if(sd!= "" ) mm=0,skill.push({'sa':sd,'sar':sdr});

var se=document.getElementById("skill5").value;
var ser=document.getElementById("range5").value;
if(se!= "" ) mm=0,skill.push({'sa':se,'sar':ser});

var sf=document.getElementById("skill6").value;
var sfr=document.getElementById("range6").value;
if(sf!= "" ) mm=0,skill.push({'sa':sf,'sar':sfr});
if(mm) {alert("enter a Skill !!");return;}

data['skills']=skill;

 var ach=document.getElementById("ach").value;
data['Achievement']=ach;

console.log(data);
$.ajax({
    url: "/api/pdf2",
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
document.getElementById("redirect").href = "/resume2";
document.getElementById("redirect").innerHTML = "Create Resume PDF";

}

