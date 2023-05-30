
function exe1() {
    let inputArray = createArray();
    document.write(`Input Array: </br>`)
    displayArray(inputArray);
    outputArray = reverseArray(inputArray);
    document.write("</br>");
    document.write("</br>");
    document.write("</br>");
    displayArray(outputArray);

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

function reverseArray(arr) {
    let temp;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
