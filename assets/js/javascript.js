function check(){
    // получаем значение поля key
    let rebus = document.send;
    let val = rebus.value;
    // получаем элемент printBlock
    let printBlock = document.getElementById("checkRebus");
    // создаем новый параграф
    let pElement = document.createElement("p");
    // устанавливаем у него текст
    pElement.textContent = 'Правильно!';
    // добавляем параграф в printBlock
    printBlock.appendChild(pElement);
}
check()