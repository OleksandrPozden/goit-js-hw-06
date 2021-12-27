const slideRef = document.querySelector("input#font-size-control");
const textRef = document.querySelector("span#text");

slideRef.addEventListener('input', onChangeFontSize)

function onChangeFontSize(e){
    textRef.style.fontSize = e.currentTarget.value+"px";
}