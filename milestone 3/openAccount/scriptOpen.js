myFunc=()=>{
let country=document.getElementById("country").value
let Full=document.getElementById("Full").value
let Email=document.getElementById("Email").value
let password=document.getElementById("password").value
if (country!=="" &&Full!==""&&Email!==""&&password!=="" ) {
alert("Your request is made succesfuly")
}
else{
	alert("you didnt complete the form please check")
}
}

