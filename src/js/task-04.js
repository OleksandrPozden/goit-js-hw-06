const counterValue = document.querySelector("#value");
const decrementButton = counterValue.previousElementSibling;
const incrementButton = counterValue.nextElementSibling;

const changeValueField = value => {
    counterValue.textContent = parseInt(counterValue.textContent)+value
};
const changeValueHandler = e => {
    const step = parseInt(e.currentTarget.textContent)
    changeValueField(step);
}
decrementButton.addEventListener('click',changeValueHandler);
incrementButton.addEventListener('click',changeValueHandler);