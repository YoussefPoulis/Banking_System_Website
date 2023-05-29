const button = document.getElementById("alert-id");
button.addEventListener("click", myFunc4, false);

function myFunc4(event) {
	event.preventDefault();

	let country=document.getElementById("phone").value
	let Full=document.getElementById("Full").value
	let Email=document.getElementById("Email").value
	let password=document.getElementById("PIN").value
	let AccNumber=document.getElementById("AccNumber").value

	if (country!=="" &&Full!==""&&Email!==""&&password!==""&&AccNumber!=="" ) {
		Swal.fire({
			title: 'succesfull!',
			icon: 'success',
			confirmButtonColor: '#850F0F'
		})
		sayWords("succesfull");
	}
	else {
		// add the next 4 lines
		Swal.fire({
			title: 'invalid data!',
			icon: 'error',
			confirmButtonColor: '#850F0F'
		})
		sayWords("invalid data");
	}

}