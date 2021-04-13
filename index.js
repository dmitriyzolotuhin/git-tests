const resultElem = document.querySelector('#result');
const buttonElem = document.querySelector('#generate_button');

const generateRandomNumber = () => Math.round(1000 * Math.random());

buttonElem.addEventListener("click", () => {
    const result = generateRandomNumber();
    resultElem.textContent = `Result: ${result}`;
});
