import "./styles.css";
let input = document.getElementById("input");
let increaseButton = document.getElementById("increase");
let decreaseButton = document.getElementById("decrease");
let output = document.getElementById("output");

increaseButton.addEventListener("click", increaseHandle);
decreaseButton.addEventListener("click", decreaseHandle);

let currentSize = 20;

function increaseHandle() {
  let Inputtedvalue = input.value;
  console.log("++");
  currentSize = currentSize + 2;
  output.style.fontSize = `${currentSize}px`;
  displayOutput(Inputtedvalue);
}
function decreaseHandle() {
  let Inputtedvalue = input.value;
  currentSize = currentSize - 2;
  output.style.fontSize = `${currentSize}px`;

  // console.log(size)
  displayOutput(Inputtedvalue);
  console.log("--");
}

function displayOutput(input) {
  output.innerText = input;
}
