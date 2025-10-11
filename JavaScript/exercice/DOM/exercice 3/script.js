let count = 0;

const myButton = document.getElementById("counter");
//const myButton = document.querySelector("#counter");

function clickCount() {
    count++;
    myButton.innerText =`${count} clics !`;
}
myButton.addEventListener("click", clickCount);