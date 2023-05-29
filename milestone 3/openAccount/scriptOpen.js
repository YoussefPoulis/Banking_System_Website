const button = document.getElementById("alert-id");
button.addEventListener("click", myFunc4, false);

function myFunc4(event) {
	event.preventDefault();

	let country=document.getElementById("country").value
	let Full=document.getElementById("Full").value
	let Email=document.getElementById("Email").value
	let password=document.getElementById("password").value

	if (country!=="" &&Full!==""&&Email!==""&&password!=="" ) {
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
