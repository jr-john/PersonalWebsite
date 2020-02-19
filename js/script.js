//Slideshow
var i=0;
var pics=["../img/Slide1.jpg","../img/Slide2.jpg","../img/Slide3.jpg","../img/Slide4.jpg","../img/Slide5.jpg"];
function change() {
    i=(i+1)%5;
    document.getElementById("Slide").src=pics[i];
}
//Scroll to top Button
mybutton=document.getElementById("btnScroll");
window.onscroll=function() {scrolFun();};
function scrolFun() {
    if (document.body.scrollTop>100 || document.documentElement.scrollTop>100) {
        mybutton.style.display="block";
    }
    else {
        mybutton.style.display="none";
    }
}
function goUp() {
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}
//Visitor Tracker
var n=1;
function visited() {
    if ("vis" in localStorage) {
        n=Number(localStorage.getItem("vis"))+1;
    }
    localStorage.setItem("vis",n);
}
if(localStorage.getItem("vis")!= undefined)
document.getElementById("visitorCounter").innerHTML=localStorage.getItem("vis");
if(localStorage.getItem("vis")==1)
    document.getElementById("time").innerHTML="Time";
else
    document.getElementById("time").innerHTML="Times";
//Review
function loadTable() {
    if("form" in localStorage)
    {
        var table=document.getElementById("review");
        var count=localStorage.getItem("form");
        var row;
        for(var i=1;i<=count;i++)
        {
            row=Array.from(localStorage.getItem(i).split(","));
            table.innerHTML+="<tr><td nowrap>"+row[0]+"</td><td>"+row[1]+"</td><td>"+row[2]+"</td><td>"+row[3]+"</td></tr>"; 
        }
        document.getElementById("empty").innerHTML="";
    }
    else
    {
        document.getElementById("empty").innerHTML="No Reviews Yet";   
    }
} 
function formSubmit() {
    var name=document.getElementsByName("name")[0].value;
    var skill=document.getElementsByName("skill")[0].value;
    var level=document.getElementsByName("level")[0].value;
    var comment=document.getElementsByName("comment")[0].value;
    document.getElementsByName("name")[0].value="";
    document.getElementsByName("skill")[0].value="";
    document.getElementsByName("level")[0].value="";
    document.getElementsByName("comment")[0].value="";
    if(name=="" && skill=="" && level=="" && comment =="")
        return;
    var newform=1;
    if("form" in localStorage) {
        newform=parseInt(localStorage.getItem("form"))+1;
    }
    localStorage.setItem(newform,[name,skill,level,comment]);
    localStorage.setItem("form",newform);
    document.getElementById("empty").innerHTML="";
    document.getElementById("review").innerHTML+="<tr><td nowrap>"+name+"</td><td>"+skill+"</td><td>"+level+"</td><td>"+comment+"</td></tr>";
}