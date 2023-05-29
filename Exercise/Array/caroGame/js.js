function createArray() {
    let height = 20;
    let length = 40;
    let arr = [];
    for (let i = 0; i < height; i++) {
        arr[i] = [];
        for (let j = 0; j < length; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}

function renderTable() {
    let arr = createArray();
    document.write('<table><tbody>')
    for (let i = 0; i < arr.length; i++) {
        let trData = '';
        for (let j = 0; j < arr[i].length; j++) {
            trData += `<td id='${i}-${j}'>0</td>`;
        }
        document.write(`<tr> ${trData}</tr>`);
    }
    document.write('</table></tbody>')

    document.write(`</br> </br> <button onclick="changeValue('red')">Player 1</button> <button onclick="changeValue('green')">Player 2</button>`)
}


function changeValue(color) {
    let coordinatesX = 0;
    let coordinatesY = 0;
    do {
        coordinatesX = Number(prompt("input coordinates X: "));

    } while (isNaN(coordinatesX) || coordinatesX < 0 || !Number.isInteger(coordinatesX))
    do {
        coordinatesY = Number(prompt("input coordinates Y: "));

    } while (isNaN(coordinatesY) || coordinatesY < 0 || !Number.isInteger(coordinatesY))
    if (document.getElementById(`${coordinatesX}-${coordinatesY}`).innerText == "0") {
        document.getElementById(`${coordinatesX}-${coordinatesY}`).innerText = 'x';
        document.getElementById(`${coordinatesX}-${coordinatesY}`).style.color = color;
    } else {
        alert('Invalid move')
    }

}