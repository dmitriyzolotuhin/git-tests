const resultElem = document.querySelector('#result');
const buttonElem = document.querySelector('#btn');
const maxValueInputElem = document.querySelector('#max_value_input');

const generateRandomNumber = (maxValue) => Math.round(maxValue * Math.random());

buttonElem.addEventListener("click", () => {
    const result = generateRandomNumber(maxValueInputElem.value);
    resultElem.textContent = `Result: ${result}`;
});
