let button = document.querySelector(".btn");
let body = document.querySelector("body");

button.addEventListener("click", changeColor);

function randomInteger(min, max) {
	let randomComponent1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	let randomComponent2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	let randomComponent3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	let color = `RGB(${randomComponent1},${randomComponent2},${randomComponent3})`;
	return color;
}

function changeColor(R, G, B) {
	let primaryColor = (body.style.backgroundColor = randomInteger());
	button.style.backgroundColor = primaryColor;
	button.style.color = "rgb(255,255,255 )";
}
