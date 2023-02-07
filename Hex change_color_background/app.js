let button = document.querySelector(".btn");
let body = document.querySelector("body");
let heading = document.querySelector("h1");

button.addEventListener("click", changeColor);

function changeColor(R, G, B) {
	let primaryColor = (body.style.backgroundColor = rgbToHex());
	button.style.backgroundColor = primaryColor;
	button.style.color = "rgb(255,255,255 )";
	heading.textContent = `HEX COLOR:${rgbToHex()}`;
}

function rgbToHex(R, G, B) {
	let randomComponent1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	let randomComponent2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	let randomComponent3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

	return (
		"#" +
		(
			(1 << 24) |
			(randomComponent1 << 16) |
			(randomComponent2 << 8) |
			randomComponent3
		)
			.toString(16)
			.slice(1)
	);
}
