function runExe() {
    let numbers = createArray();
    displayArray(numbers);
    findMax(numbers);

}

function createArray() {
    let size = 0;
    do {
        size = Number(prompt("Enter size: "));

    } while (isNaN(size) || size < 0 || !Number.isInteger(size))

    let numbers = new Array(size);

    for (let i = 0; i < numbers.length; i++) {
        do {
            numbers[i] = Number(prompt(`Enter element ${i + 1}: `));

        } while (numbers[i] == '' || isNaN(numbers[i]));
    }
    return numbers;

}

function displayArray(arr) {
    document.write('Input Array: </br>')
    for (let i in arr) {
        document.write(`${arr[i]} </br>`);
    }
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max <= arr[i]) {
            max = arr[i];
        }

    }
    document.write(`Max number is: ${max} </br>`);
}