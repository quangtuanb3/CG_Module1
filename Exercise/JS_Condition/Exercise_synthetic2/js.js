// Bài 1: Chuyển từ độ C sang độ F. (°C  x  9/5 + 32 = °F)
function exe1() {
    let temp, fahrenheit;
    do {
        temp = Number(prompt('Input temp (C): '))
    } while (isNaN(temp))
    fahrenheit = temp * 9 / 5 + 32
    document.write(`${temp}C = ${fahrenheit}F`)
}
// Bài 2: Chuyển từ mét sang feet: (ft =m * 3.2808)

function exe2() {
    let m, ft;
    do {
        m = Number(prompt('Input meter: '))
    } while (isNaN(m) || m < 0)
    ft = m * 3.2808
    document.write(`${m}m = ${ft}ft`)
}

// Bài 3: Tính diện tích hình vuông khi biết cạnh a.

function exe3() {
    let side, square;
    do {
        side = Number(prompt("Input side's length (m): "))
    } while (isNaN(side) || side < 0)
    square = side ** 2
    document.write(`Square is ${square.toFixed(2)} m2`)
}
// Bài 4: Tính diện tích hình  chữ nhật khi biết 02 cạnh a, b.
function exe4() {
    let sideA, sideB, area;
    do {
        sideA = Number(prompt("Input side A: "))
    } while (isNaN(sideA) || sideA < 0)
    do {
        sideB = Number(prompt("Input side B: "))
    } while (isNaN(sideB) || sideB < 0)
    area = sideA * sideB
    document.write(`Area is ${area}`)
}

// Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
function exe5() {
    let sideA, sideB, area;
    do {
        sideA = Number(prompt("Input side A: "))
    } while (isNaN(sideA) || sideA < 0)
    do {
        sideB = Number(prompt("Input side B: "))
    } while (isNaN(sideB) || sideB < 0)
    area = sideA * sideB / 2
    document.write(`Area is ${area}`)
}
// Bài 6: Giải phương trình bậc 1. (ax+ b = 0)
function exe6() {
    let numA, numB, x;
    do {
        numA = Number(prompt("Input number a: "))
    } while (isNaN(numA))
    do {
        numB = Number(prompt("Input number b: "))
    } while (isNaN(numB));
    if (numA == 0 && numB == 0) {
        document.write("Infinitely many solutions")
    } else if (numA == 0 && numB != 0) {
        document.write("No solution")
    } else {
        document.write(`Solution is ${(- numB) / numA} `)
    }
}
// Bài 7: Giải phương trình bậc 2.
function exe7() {
    let numA, numB, numC, delta, x1, x2;
    do {
        numA = Number(prompt("Input number a: "))
    } while (isNaN(numA))
    do {
        numB = Number(prompt("Input number b: "))
    } while (isNaN(numB));
    do {
        numC = Number(prompt("Input number b: "))
    } while (isNaN(numC));

    delta = numB ** 2 - 4 * numA * numC;

    if (delta > 0) {
        x1 = (-numB + Math.sqrt(delta)) / (2 * numA);
        x2 = (-numB - Math.sqrt(delta)) / (2 * numA);
        document.write(`x1: ${x1}; x2: ${x2}`)
    } else if (delta === 0) {
        x1 = -numB / (2 * numA);
        document.write(`x1, x2: ${x1}`)
    } else {
        document.write("No solution")
    }
}

// Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không. Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.
function exe8() {
    let age = Number(prompt("Input age: "))
    if (isNaN(age) || age < 0 || age > 120) {
        document.write(`${age} isn't age of human`)
    } else {
        document.write(`${age} is age of human`)
    }
}
// Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để a,b,c là cạnh của một tam giác là: 
// (a,b,c > 0
// a + b > c
// b + c > a
// a + c > b)

function exe9() {
    let a = Number(prompt("Input number a: "))
    let b = Number(prompt("Input number a: "))
    let c = Number(prompt("Input number a: "))
    if (isNaN(a) || isNaN(b) || isNaN(c) || a < 0 || b < 0 || c < 0 || a + b <= c || a + c <= b || b + c <= a) {
        document.write(`${a}, ${b}, ${c} aren't sides of triangle`)
    } else {
        document.write(`${a}, ${b}, ${c} are sides of triangle`)
    }
}
// /Bài 10: Viết chương trình tính giá điện.
function exe10() {
    let level = 0;
    let price = 0;
    let payment = 0;
    function InputNum() {
        return num = Number(prompt('Input your quantity: '))
    }

    let num = InputNum();
    if (num < 0) InputNum();
    if (num > 400) {
        level = 6;
        price = 3.015;
        payment = 50 * 1.728 + 50 * 1.786 + 100 * 2.074 + 100 * 2.612 + 100 * 2.919 + (num - 400) * 3.015;
        return;
    }

    if (num > 300) {
        level = 5;
        price = 2.919;
        payment = 50 * 1.728 + 50 * 1.786 + 100 * 2.074 + 100 * 2.612 + (num - 300) * 2.919;
        return;
    }
    if (num > 200) {
        level = 4;
        price = 2.612;
        payment = 50 * 1.728 + 50 * 1.786 + 100 * 2.074 + (num - 200) * 2.612;
        return;
    }
    if (num > 100) {
        level = 3;
        price = 2.074;
        payment = 50 * 1.728 + 50 * 1.786 + (num - 100) * 2.074;
        return;
    }
    if (num > 50) {
        level = 2;
        price = 1.786;
        payment = 50 * 1.728 + (num - 50) * 1.786;
        return;
    }
    if (num < 51) {
        level = 1;
        price = 1.728;
        payment = num * 1.728;
        return;
    }
    document.write(`Quantity: ${num}, Level: ${level}, Payment: ${payment}`)
}

// Bài 11: Viết chương trình tính thuế thu nhập cá nhân.
function exe11() {
    do {
        income = Number(prompt("Input income (USD): "))
    } while (isNaN(numB) || income < 0);
    var taxBrackets = [
        { threshold: 5000, rate: 0.1 },
        { threshold: 10000, rate: 0.15 },
        { threshold: 20000, rate: 0.2 },
        { threshold: Infinity, rate: 0.25 }
    ];
    var tax = 0;
    for (var i = 0; i < taxBrackets.length; i++) {
        var currentBracket = taxBrackets[i];
        var previousBracket = taxBrackets[i - 1];

        if (income <= currentBracket.threshold) {
            tax += (income - (previousBracket ? previousBracket.threshold : 0)) * currentBracket.rate;
            break;
        } else {
            tax += (currentBracket.threshold - (previousBracket ? previousBracket.threshold : 0)) * currentBracket.rate;
        }
    }
    document.write(`Income: ${income}, Tax: ${tax}`);
}
// Bài 12: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.

function exe12() {
    let principal, months, interestRate;
    do {
        principal = Number(prompt("Input principal (USD): "))
    } while (isNaN(principal) || principal < 0);
    do {
        months = Number(prompt("Input months: "))
    } while (isNaN(months) || months < 0 || !Number.isInteger(months));
    do {
        interestRate = Number(prompt("Input interestRate (%): "))
    } while (isNaN(interestRate) || interestRate < 0);

    var monthlyInterestRate = interestRate / 100 / 12;
    var totalAmount = principal * Math.pow(1 + monthlyInterestRate, months);
    var interest = totalAmount - principal;
    document.write(`Principal: ${principal}, Months: ${months}, Interest: ${interest.toFixed(2)} `)
}