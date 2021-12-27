function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector("button.change-color");
const spanRef = document.querySelector("span.color");

buttonRef.addEventListener('click', onCLickChangeColor);

function onCLickChangeColor(){
  const randomHex = getRandomHexColor();
  document.body.style.backgroundColor = randomHex;
  spanRef.textContent = randomHex;
}