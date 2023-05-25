myFunc=()=>{
let phone=document.getElementById("phone").value
let Full=document.getElementById("Full").value
let Email=document.getElementById("Email").value
let AccNumber=document.getElementById("AccNumber").value
let Type=document.getElementById("Type").value
let Amount=document.getElementById("Amount").value
if(!Email.includes("@")){
alert("Your Email is in wrong format")
}
else if (Type!=="" &&Full!==""&&Email!==""&&AccNumber!==""&&phone!==""&&Amount!=="" ) {
alert("Your request is made succesfuly")
location.replace("../clientHome/clientHome.html")
}
else{
	alert("you didnt complete the form please check")
}
}
