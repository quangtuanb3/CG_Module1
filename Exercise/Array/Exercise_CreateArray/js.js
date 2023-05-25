let size = 0;
do {
    size = Number(prompt("input size: "));

} while (isNaN(size) || size < 0 || !Number.isInteger(size))

let numbers = new Array(size);

for (let i = 0; i < numbers.length; i++) {
    do {
        numbers[i] = Number(prompt(`Enter number ${i + 1}: `));

    } while (isNaN(numbers[i]))
}

displayArray(numbers);
function displayArray(arr) {
    for (let i in arr) {
        document.write(+i + 1 + ': ' + arr[i]);
        document.write("</br>");
    }
}
