function change() {
    if (document.getElementById("validationCustom04").value == "Partial") {
        document.getElementById("me").style.display = "block"
    }
    else {
        document.getElementById("me").style.display = "none"
    }

}

const button = document.getElementById("alert-id");
button.addEventListener("click", myFunc4, false);

function myFunc4(event) {
	event.preventDefault();

    Swal.fire({
        title: 'succesfull!',
        icon: 'success',
        confirmButtonColor: '#850F0F'
    })
    sayWords("succesfull");
	

}