// Bài 148: Tìm số nguyên tố cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có số nguyên tố thì trả về
//         -1
function exe() {
    let size = 0;
    do {
        size = Number(prompt("Input size of array: "))
    } while (size < 0 || !Number.isInteger(size))
    let numbers = createArray(size);
    let primeNum = -1;
    for (i = numbers.length - 1; i >= 0; i--) {
        if (isPrime(numbers[i])) {
            primeNum = numbers[i];
            alert(`${numbers.toString()}, prime number: ${primeNum}`);
            return;
        }
    }
    alert(primeNum);
}

function createArray(arrSize) {
    let numbers = new Array(arrSize);
    for (let i = 0; i < numbers.length; i++) {
        do {
            numbers[i] = Number(prompt(`Input number ${i + 1}`))
        } while (Number.isNaN(numbers[i]))
    }
    return numbers;
}

function isPrime(num) {
    if (num === 2) {
        return true;
    }
    if (num <= 1 || num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

