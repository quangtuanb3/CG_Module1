
let tbody = document.getElementById("tbody_content");
let trData;
function createMatrix() {
    let col, row, min, max;
    do {
        col = Number(prompt("Input cols: "));
    } while (Number.isNaN(col) || !Number.isInteger(col) || col < 0)
    do {
        row = Number(prompt("Input rows: "));
    } while (Number.isNaN(row) || !Number.isInteger(row) || row < 0)
    do {
        min = Number(prompt("Input min: "));
    } while (Number.isNaN(min) || min < 1)
    do {
        max = Number(prompt("Input max: "));
    } while (Number.isNaN(max) || max <= min)

    for (let i = 0; i < row; i++) {
        trData = '';
        for (let j = 0; j < col; j++) {
            trData += `<td>${generateNumber(min, max)}</td>`
        }
        tbody.innerHTML += trData;
    }

}

function generateNumber(min, max) {
    return Math.ceil(Math.random() * (max - min - 1)) + min - 1;

}
