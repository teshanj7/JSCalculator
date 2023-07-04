
function addOperation() {
    const number1 = document.getElementById("num1");
    const number2 = document.getElementById("num2");
    const answer = document.getElementById("answer");

    const result = parseFloat(number1.value) + parseFloat(number2.value);
    answer.value = result;
}

function minusOperation(){
    const number1 = document.getElementById("num1");
    const number2 = document.getElementById("num2");
    const answer = document.getElementById("answer");

    const result = parseFloat(number1.value) - parseFloat(number2.value);
    answer.value = result;
}

function divideOperation(){
    const number1 = document.getElementById("num1");
    const number2 = document.getElementById("num2");
    const answer = document.getElementById("answer");

    const result = parseFloat(number1.value) / parseFloat(number2.value);
    answer.value = result;
}

function multiplyOperation(){
    const number1 = document.getElementById("num1");
    const number2 = document.getElementById("num2");
    const answer = document.getElementById("answer");

    const result = parseFloat(number1.value) * parseFloat(number2.value);
    answer.value = result;
}