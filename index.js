
// const button = document.getElementById("button");

// function addingEventListener() {
// 	button.addEventListener("click", function () {
// 		alert("Hello World");
// 	});
// }

// addingEventListener();

function addingEventListener() {

const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}