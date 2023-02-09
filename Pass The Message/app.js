let button = document.querySelector(".btn");
let input = document.querySelector(".input");
let message = document.querySelector(".message");

function validateInput() {
	if (input.value.length > 0) {
		button.disabled = false;
	} else {
		button.disabled = true;
	}
}

function lastMessageDelivered() {
	message.textContent = input.value;
	input.value = "";
	button.disabled = true;
}

input.addEventListener("keyup", validateInput);
button.addEventListener("click", lastMessageDelivered);
