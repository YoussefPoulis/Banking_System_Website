const button = document.getElementById("alert-id");
button.addEventListener("click", myFunc4, false);

function myFunc4(event) {
	event.preventDefault();

	let phone=document.getElementById("phone").value
	let Full=document.getElementById("Full").value
	let Email=document.getElementById("Email").value
	let AccNumber=document.getElementById("AccNumber").value
	let Amount=document.getElementById("Amount").value

	if (Full!==""&&Email!==""&&AccNumber!==""&&phone!==""&&Amount!=="" ) {
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