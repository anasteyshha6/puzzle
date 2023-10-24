const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

let currAnswer = 'а роза упала на лапу азора';
let corrAnswer = 'Правильно!';
let errorAnswer = 'Неверно)'
buttonNode.addEventListener('click', function () {
    const inputValue = inputNode.value;
    if (!inputValue) {
        return
    }

    const answer = inputNode.value;
    let output = corrAnswer;

    if (answer !== currAnswer.toLowerCase()) {
        output = errorAnswer;
    }

    outputNode.innerHTML = output;
});