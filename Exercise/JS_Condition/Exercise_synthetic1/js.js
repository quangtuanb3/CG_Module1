// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
function exe1() {
    let num1 = 0;
    let num2 = 0;
    do {
        num1 = Number(prompt('Input num1: '))
    } while (isNaN(num1))
    do {
        num2 = Number(prompt('Input num2: '))
    } while (isNaN(num2))

    if (num1 % num2 === 0) {
        document.write(`${num1} is divisible by ${num2} `)
    } else {
        document.write(`${num1} isn't divisible by ${num2} `)
    }
}

// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
function exe2() {
    let age = 0;
    do {
        age = Number(prompt('Input age: '))
    } while (isNaN(age) || age < 0 || !Number.isInteger(age))

    if (num1 >= 16) {
        document.write(`Enough age to join 10th grade`)
    } else {
        document.write(`Not enough age to join 10th grade`)
    }
}

// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
function exe3() {
    let num = 0;
    do {
        num = Number(prompt('Input number: '))
    } while (isNaN(num) || !Number.isInteger(num))

    if (num > 0) {
        document.write(`${num} is greater than 0`)
    } else if (num < 0) {
        document.write(`${num} is smaller than 0`)
    } else {
        document.write(`${num} is equal to 0`)
    }
}
// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó

function exe4() {
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    do {
        num1 = Number(prompt('Input num1: '))
    } while (isNaN(num1) || !Number.isInteger(num1))
    do {
        num2 = Number(prompt('Input num2: '))
    } while (isNaN(num1) || !Number.isInteger(num2))
    do {
        num3 = Number(prompt('Input num1: '))
    } while (isNaN(num3) || !Number.isInteger(num3))
    if (num1 >= num2 && num1 >= num3) {
        document.write(`${num1} is max`);
        return;
    } else if (num2 >= num1 && num2 >= num3) {
        document.write(`${num2} is max`);
        return;
    } else {
        document.write(`${num3} is max`);
    }
}

// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ

function exe5() {
    let testScore = 0;
    let midExamScore = 0;
    let finalExamScore = 0;
    do {
        testScore = Number(prompt('Input test score: '))
    } while (isNaN(testScore) || testScore < 0)
    do {
        midExamScore = Number(prompt('Input middle term exam score: '))
    } while (isNaN(midExamScore) || midExamScore < 0)
    do {
        finalExamScore = Number(prompt('Input final term exam score: '))
    } while (isNaN(finalExamScore) || finalExamScore < 0)
    let avg = (testScore + midExamScore * 2 + finalExamScore * 3) / 6
    let rank = '';
    switch (true) {
        case avg > 8:
            rank = 'Excellent';
            break;
        case avg > 6.5:
            rank = 'Good';
            break;
        case avg > 5:
            rank = 'Average';
            break;
        default:
            rank = 'Weak'
            break;

    }
    document.write(`Average Score: ${avg.toFixed(2)}, Rank: ${rank} `);
}

// Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng

function exe6() {
    let sales, rate, income;
    do {
        sales = Number(prompt('Input sales (USD): '))
    } while (isNaN(sales) || sales < 0)
    switch (true) {
        case sales > 1000:
            rate = 5;
            break;
        case sales > 1500:
            rate = 7;
            break;
        case sales > 2100:
            rate = 15;
            break;
        default:
            rate = 2;
            break;
    }
    income = (sales * rate / 100).toFixed(1);
    document.write(`Sales: ${sales}USD, Rate: ${rate}%, Income: ${income}USD`)
}
// Bài 7: Tính cước điện thoại cho một hộ gia đình với các thông số đã cho
function exe7() {
    let time, rate, total;
    do {
        time = Number(prompt('Input time (min): '))
    } while (isNaN(time) || time < 0)
    switch (time) {
        case time > 10:
            rate = 0.3;
            total = 0.45 + 5 * 0.25 + 5 * 0.15 + (time - 10) * 0.11;
            break;
        case time > 5:
            rate = 0.15;
            total = 0.45 + 5 * 0.25 + (time - 5) * 0.15;
            break;
        case time > 1:
            rate = 0.25;
            total = 0.45 + (time - 1) * 0.25;
            break;
        default:
            rate = 0.45;
            total = time * 0.45
            break;
    }
    document.write(`Time: ${time}min, Rate: ${rate}, Total: ${total}USD`)
}