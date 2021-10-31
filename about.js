console.log("hello world");

function handleSubmit(event) {
	event.preventDefault();
	
	alert('Form submitted!');
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function mouseOver(event) {
	event.preventDefault();
	alert("You're smarter than the Riddler! You found my secret pop-up!");
};

let image = document.querySelector('#batduck');
image.addEventListener('mouseover', mouseOver);