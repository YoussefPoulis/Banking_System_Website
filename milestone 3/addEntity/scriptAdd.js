myFunc=()=>{
let country=document.getElementById("country").value
let Name=document.getElementById("Name").value
let Type=document.getElementById("Type").value
if (country!=="" &&Name!==""&&Type!=="" ) {
alert("Your request is made succesfuly")
location.replace("../adminHome/adminHome.html")
}
else{
	alert("you did not complete the form please check")
}
}