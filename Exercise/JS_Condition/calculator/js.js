function DOM_ID(id) {
    return document.getElementById(id)
}
let sub = DOM_ID('sub');
let add = DOM_ID('add');
let mul = DOM_ID('mul');
let div = DOM_ID('div');
let cls = DOM_ID('cls');
let equal = DOM_ID('equal');
let screen = DOM_ID('screen');

function printScreen(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
}

function getResult() {
    let result = eval(screen.value);
    screen.value = result;
}