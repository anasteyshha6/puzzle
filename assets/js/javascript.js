const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

let currAnswer = 'а роза упала на лапу азора';
let corrAnswer = 'ПРАВИЛЬНО!';
let errorAnswer = 'НЕВЕРНО)'
buttonNode.addEventListener('click', function () {
    const inputValue = inputNode.value;
    if (!inputValue) {
        return
    }

    const userAnswer = inputNode.value;

    if (userAnswer.toLowerCase() === currAnswer) {
        outputNode.textContent = corrAnswer;
    } else {
        outputNode.textContent = errorAnswer;
    }

});