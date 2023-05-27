myFunc=()=>{
let country=document.getElementById("phone").value
let Full=document.getElementById("Full").value
let Email=document.getElementById("Email").value
let password=document.getElementById("PIN").value
let AccNumber=document.getElementById("AccNumber").value
if(!Email.includes("@")){
alert("Your Email is in wrong format")
}
else if (country!=="" &&Full!==""&&Email!==""&&password!==""&&AccNumber!=="" ) {
alert("Your request is made succesfuly")
location.replace("../clientHome/clientHome.html")
}
else{
	alert("you did not complete the form please check")
}
}