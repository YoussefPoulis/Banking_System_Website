const button = document.getElementById("alert-id1");
button.addEventListener("click", card_1, false);

function card_1(event) {
	event.preventDefault();

	let temp=document.getElementById("card_1")
	temp.remove();

	Swal.fire({
		title: 'succesfull!',
		icon: 'success',
		confirmButtonColor: '#850F0F'
	})
	sayWords("succesfull");
}

const button2 = document.getElementById("alert-id2");
button2.addEventListener("click", card_2, false);

function card_2(event) {
	event.preventDefault();

	let temp=document.getElementById("card_2")
	temp.remove();

	Swal.fire({
		title: 'succesfull!',
		icon: 'success',
		confirmButtonColor: '#850F0F'
	})
	sayWords("succesfull");
}

const button3 = document.getElementById("alert-id3");
button3.addEventListener("click", card_3, false);

function card_3(event) {
	event.preventDefault();

	let temp=document.getElementById("card_3")
	temp.remove();

	Swal.fire({
		title: 'succesfull!',
		icon: 'success',
		confirmButtonColor: '#850F0F'
	})
	sayWords("succesfull");
}