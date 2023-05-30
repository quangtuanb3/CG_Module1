// Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
function exe1() {
    let num = 0;
    do {
        num = Number(prompt("Enter a number: "))
    } while (isNaN(num))
    let squareNum = getSquare(num);
    alert(`Square ${num}: ${squareNum}`)
}
function getSquare(number) {
    return number ** 2;
}

// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
function exe2() {
    let radius = 0;
    do {
        radius = Number(prompt("Enter a radius: "))
    } while (isNaN(radius) || radius < 0)
    let perimeter = getPerimeter(radius);
    let area = getArea(radius);
    alert(`radius: ${radius}; perimeter: ${perimeter}; area: ${area}`)
}
function getPerimeter(radius) {
    return (radius * 2 * Math.PI).toFixed(2);
}
function getArea(radius) {
    return (radius ** 2 * Math.PI).toFixed(2);
}

// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.

function exe3() {
    let number = 0;
    do {
        number = Number(prompt("Enter a number: "))
    } while (isNaN(number) || number < 0)
    let factorialOfNum = getFactorial(number);
    alert(`Factorial of ${number} is ${factorialOfNum}`)
}
function getFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.
function exe4() {
    let char = prompt("Enter a char: ");
    alert(isNumber(char));
}
function isNumber(char) {
    return !isNaN(char)
}

// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
function exe5() {
    let num1, num2, num3;
    do {
        num1 = Number(prompt("Enter number 1: "))
    } while (isNaN(num1) || !Number.isInteger(num1))
    do {
        num2 = Number(prompt("Enter number 2: "))
    } while (isNaN(num2) || !Number.isInteger(num2))
    do {
        num3 = Number(prompt("Enter number 3: "))
    } while (isNaN(num3) || !Number.isInteger(num3))

    let min = findMin(num1, num2, num3);
    alert(`Numbers: ${num1}, ${num2}, ${num3}. Min: ${min}`)
}
function findMin(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) { return num1; }
    else if (num2 <= num1 && num2 <= num3) { return num2; }
    else return num3;
}

// Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không. Nếu là nguyên dương trả về true, ngược lại trả về false.
function exe6() {
    let num;
    do {
        num = Number(prompt("Enter number: "));
    } while (isNaN(num))
    alert(`${num} is positive Integer: ${isPositiveInteger(num)}`);
}

function isPositiveInteger(num) {
    return (Number.isInteger(num) && num > 0)
}

// Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
function exe7() {
    let num1, num2;
    do {
        num1 = Number(prompt("Enter number 1: "))
    } while (isNaN(num1) || !Number.isInteger(num1))
    do {
        num2 = Number(prompt("Enter number 2: "))
    } while (isNaN(num2) || !Number.isInteger(num2))

    swap(num1, num2)
}
function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    alert(a + ' ' + b);
}

// Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
function exe8() {
    let numbers = createArray();
    let reverseNumbers = reverseArray(numbers);
    alert(reverseNumbers.toString())
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

        } while (isNan(inputArray[i]));
    }
    return inputArray;

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

// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không. Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1. 

function exe9() {
    let array = createArray();
    let char = prompt('Enter a char: ');
    let count = countCharInArray(char, array);
    alert(`Array: ${array}; Char: ${char}, Count: ${count}`)
}

function createArray() {
    let size = 0;
    do {
        size = Number(prompt("Enter array size: "));

    } while (isNaN(size) || size < 0 || !Number.isInteger(size))

    let inputArray = new Array(size);

    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = prompt(`Enter character ${i + 1}: `);
    }
    return inputArray;
}

function countCharInArray(char, arr) {
    let count = 0;
    arr.forEach(element => {
        if (element == char) {
            count++;
        }
    });

    if (count == 0) {
        count = -1;
    }
    return count;
}