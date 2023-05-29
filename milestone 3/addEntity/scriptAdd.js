const button = document.getElementById("alert-id");
button.addEventListener("click", myFunc4, false);

function myFunc4(event) {
	event.preventDefault();

	let country = document.getElementById("country").value
	let Name = document.getElementById("Name").value
	let Type = document.getElementById("Type").value

	if (country !== "" && Name !== "" && Type !== "") {
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