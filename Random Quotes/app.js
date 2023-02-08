let button = document.querySelector(".btn");
let quote = document.querySelector(".blockquote");
let quoteFooter = document.querySelector(".blockquote-footer");

button.addEventListener("click", doGetRequest);

async function doGetRequest() {
	let res = await axios.get("https://type.fit/api/quotes");
	let data = res.data;
	let quotes = data[getRandomIntInclusive(0, data.length)];
	quote.textContent = quotes.text;
	quoteFooter.textContent = quotes.author;
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
