function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let hasCreatedBoxes = 0;
const amountFieldRef = document.querySelector("input[type='number']");
const buttonCreateRef = document.querySelector("button[data-create]");
const buttonDestroyRef = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("div#boxes");

buttonCreateRef.addEventListener('click', onClickCreateBoxes);
buttonDestroyRef.addEventListener('click', onclickDestroyBoxes);

function onClickCreateBoxes(){
  console.log('gfgf')
  const boxes = createBoxes(amountFieldRef.value);
  console.log(boxes);
  boxesRef.insertAdjacentHTML('beforeend', boxes);
}

function onclickDestroyBoxes(){
  boxesRef.innerHTML = "";
}

function createBoxes(amount){
  let boxes = ""
  for(let i=0; i<amount; i++){
    hasCreatedBoxes+=1
    boxes += createBox(30+hasCreatedBoxes*10);
  }
  return boxes;
}

function createBox(size){
  return `
  <div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()};"></div>
  `
}