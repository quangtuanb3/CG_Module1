function getNum1() {
    let InputNum1 = document.getElementById('num1').value;
    return parseFloat(InputNum1);
}
function getNum2() {
    let InputNum2 = document.getElementById('num2').value;
    return parseFloat(InputNum2);
}

function add() {
    let num1 = getNum1();
    let num2 = getNum2();
    addition(num1, num2)
}

function sub() {
    let num1 = getNum1();
    let num2 = getNum2();
    subtraction(num1, num2)
}

function mul() {
    let num1 = getNum1();
    let num2 = getNum2();
    multiplication(num1, num2)
}

function div() {
    let num1 = getNum1();
    let num2 = getNum2();
    division(num1, num2)
}

function addition(num1, num2) {
    let result = num1 + num2
    document.getElementById('result').innerText = result;
}

function subtraction(num1, num2) {
    let result = num1 - num2
    document.getElementById('result').innerText = result;
}

function multiplication(num1, num2) {
    let result = num1 * num2
    document.getElementById('result').innerText = result;
}

function division(num1, num2) {
    let result = num1 / num2
    document.getElementById('result').innerText = result;
}

document.getElementById('add').addEventListener("click", add);
document.getElementById('sub').addEventListener("click", sub);
document.getElementById('mul').addEventListener("click", mul);
document.getElementById('div').addEventListener("click", div);