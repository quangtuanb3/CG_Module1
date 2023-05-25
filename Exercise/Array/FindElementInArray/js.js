function exe1() {
    let inputArray = createArray();
    document.write("Input Array: </br>");
    displayArray(inputArray);
    findEleInArray(inputArray);

}
function createArray() {
    let size = 0;
    do {
        size = Number(prompt("Enter size: "));

    } while (isNaN(size) || size < 0 || !Number.isInteger(size))

    let inputArray = new Array(size);

    for (let i = 0; i < inputArray.length; i++) {
        do {
            inputArray[i] = prompt(`Enter element ${i + 1}: `);

        } while (inputArray[i] == '');
    }
    return inputArray;

}

function displayArray(arr) {
    for (let i in arr) {
        document.write(`${arr[i]} </br>`);
    }
}

function findEleInArray(arr) {
    let eleFind = prompt('Input element you wanna find:');
    let notfound = 0;
    for (let index in arr) {
        if (eleFind == arr[index]) {
            document.write(`Your element has index ${index} </br>`)
            notfound++;
        }
    }
    if (notfound == 0) {
        document.write(`Your element not found </br>`)
    }
}