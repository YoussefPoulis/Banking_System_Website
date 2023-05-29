const button = document.getElementById("alert-id");
button.addEventListener("click", myFunc4, false);

function myFunc4(event) {
	event.preventDefault();

    let creditCardNumber = document.getElementById("creditcardnumber").value
    let description = document.getElementById("description").value

	if (creditCardNumber !== "" ) {
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