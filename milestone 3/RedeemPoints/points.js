const button = document.getElementById("alert-id");
button.addEventListener("click", myFunc4, false);

const button1 = document.getElementById("alert-id1");
button1.addEventListener("click", myFunc4, false);

const button2 = document.getElementById("alert-id2");
button2.addEventListener("click", myFunc4, false);

const button3 = document.getElementById("alert-id3");
button3.addEventListener("click", myFunc4, false);

const button4 = document.getElementById("alert-id4");
button4.addEventListener("click", myFunc4, false);

const button5 = document.getElementById("alert-id5");
button5.addEventListener("click", myFunc4, false);

function myFunc4(event) {
	event.preventDefault();

    console.log("test")
    Swal.fire({
        title: 'succesfull!',
        icon: 'success',
        confirmButtonColor: '#850F0F'
    })
    sayWords("succesfull");

}