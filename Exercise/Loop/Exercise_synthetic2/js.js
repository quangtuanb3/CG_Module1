// Bài 1: In dãy fibonacci 
function exe1() {
    let num = 0;
    do {
        num = Number(prompt('Input quantity: '))
    } while (isNaN(num) || num < 2)
    let fibonacci = 1;
    let temp = 1;
    let i = 1;
    let oldFibonacci = 1;
    while (true) {
        temp = oldFibonacci;
        oldFibonacci = fibonacci
        fibonacci = fibonacci + temp;
        document.write(`</br> ${fibonacci}`);
        i++;
        if (i == num) {
            break;
        }
    }
}

// Bài 2: Tính giai thừa của một số nguyên dương
function exe2() {
    let num = 0;
    do {
        num = Number(prompt('Input number: '))
    } while (isNaN(num) || !Number.isInteger(num))
    let i = 1;
    factorial = 1;
    while (i <= num) {
        factorial *= i;
        i++;
    }
    document.write(`Giai thừa của ${num}: ${factorial}`)
}

// Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau
function exe3() {
    let i = 1;
    while (i <= 5) {
        for (let j = 1; j <= i; j++) {
            document.write(" *");
        }
        document.write('</br>')
        i++;
    }

    document.write('</br>')
    document.write('</br>')

    i = 5
    while (i > 0) {
        for (let j = 1; j <= i; j++) {
            document.write(" *");
        }
        document.write('</br>')
        i--;
    }

    document.write('</br>')
    document.write('</br>')


    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5 - i; j++) {
            document.write("<span style='color: white;'> *</span>");
        }
        for (let k = 1; k <= i; k++) {
            document.write(" ");
            document.write("*");
        }
        document.write('</br>')
    }
    document.write('</br>')
    document.write('</br>')

    for (let i = 5; i > 0; i--) {
        for (let j = 1; j <= 5 - i; j++) {
            document.write("<span style='color: white;'> *</span>");
        }
        for (let k = 1; k <= i; k++) {
            document.write(" ");
            document.write("*");
        }
        document.write('</br>')
    }
}

// Bài 4: In hình chữ nhật
function exe4() {
    let i = 0;

    for (let j = 0; j < 9; j++) {
        document.write(" *");
    }
    document.write('</br>')
    for (let k = 0; k < 3; k++) {
        document.write(" *");
        for (let l = 0; l < 7; l++) {
            document.write("<span style='color: white;'> *</span>");
        }
        document.write(" *");
        document.write('</br>')
    }
    for (let j = 0; j < 9; j++) {
        document.write(" *");
    }

    i++;
}

// Bài 5: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.

function exe5() {
    let money, months, rate;
    do {
        money = Number(prompt('Input your money(USD): '));
        if (money == "q") { break; }
    } while (isNaN(money));

    do {
        months = Number(prompt('Input months: '));
        if (months == "q") { break; }
    } while (isNaN(months) || !Number.isInteger(months) || months <= 0)
    do {
        rate = Number(prompt('Input rate per year (%): '));
        if (rate == "q") { break; }
    } while (isNaN(rate) || rate <= 0)

    let i = 1;
    let ratePM = rate / 12 / 100;
    let firstMoney = money;
    while (i < months) {
        money += money * ratePM
        i++
    }
    document.write(`Money: ${firstMoney}USD, Months: ${months}, Rate: ${rate}%/year, Result: ${money}USD`)

}

//Bài 6: In hình trái tim
function exe6() {
    document.getElementById("bodyData").innerHTML = `<i class="fa fa-heartbeat" style="font-size:300px"></i>`

}