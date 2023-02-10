let addButton = document.querySelector("#add");
let subtractButton = document.querySelector("#subtract");
let counter = document.querySelector("h1");

function addCount() {
	counter.innerHTML++;
}

function lowerCount() {
	counter.innerHTML--;
}

addButton.addEventListener("click", addCount);

subtractButton.addEventListener("click", lowerCount);

function changeColor() {
	if (counter.innerHTML > 0) {
		counter.style.color = "green";
	} else {
		if (counter.innerHTML < 0) {
			counter.style.color = "red";
		} else {
			counter.style.color = "black";
		}
	}
}

counter.addEventListener("DOMSubtreeModified", changeColor);
