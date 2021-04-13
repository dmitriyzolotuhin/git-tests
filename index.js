const resultElem = document.querySelector('#result');
const buttonElem = document.querySelector('#btn');

const generateRandomNumber = () => Math.round(1000 * Math.random());

buttonElem.addEventListener("click", () => {
    const result = generateRandomNumber();
    resultElem.textContent = `Result: ${result}`;
});
