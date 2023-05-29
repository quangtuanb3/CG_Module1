function findMinInArray() {
    let numbers = getArray();
    let min = findMin(numbers);
    document.write(`Array Numbers: ${numbers.toString()} </br> Min:  ${min}`)
}

function getArray() {
    let size = 0;
    do {
        size = Number(prompt("Enter size of array: "));

    } while (isNaN(size) || !Number.isInteger(size) || size < 2);
    let array = [];
    for (let i = 0; i < size; i++) {
        let num = 0;
        do {
            num = Number(prompt(`Enter number ${i + 1}: `));

        } while (isNaN(num));
        array.push(num);
    }
    return array;
}

function findMin(numbers) {
    let min = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]
        }
    }
    return min;
}