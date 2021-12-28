const inputFieldRef = document.querySelector("input#name-input");
const outputFieldRef = document.querySelector("span#name-output");

inputFieldRef.addEventListener('input', e =>{
    const text =  e.currentTarget.value.trim();
    outputFieldRef.textContent = text ? text : "Anonymous";
})