// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
function exe1() {
    let i = 1;
    while (i <= 100) {
        document.write(`</br> ${i}`)
        if (i == 100) {
            document.write(`</br> Done`)
        }
        i++;

    }
}
// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.

function exe2() {
    let temp = 0;
    do {
        temp = Number(prompt("Input temperature:"));
    } while (isNaN(temp) || temp < 20 || temp > 100)

    document.write("temperature: " + temp);

}

// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.

function exe3() {
    let fibonacci = 1;
    let oldFibonacci = 1;
    let count = 0;
    let temp = 0;
    while (true) {
        temp = oldFibonacci;
        oldFibonacci = fibonacci;
        fibonacci = fibonacci + temp;
        document.write('</br>' + fibonacci);
        count++
        if (count == 20) {
            break;
        }

    }
}

// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
function exe4() {
    let fibonacci = 1;
    let oldFibonacci = 1;
    let temp = 0;
    while (true) {
        temp = oldFibonacci;
        oldFibonacci = fibonacci;
        fibonacci = fibonacci + temp;
        if (fibonacci % 5 == 0) {
            document.write(fibonacci)
            break;
        }


    }
}
// Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
function exe5() {
    let fibonacci = 1;
    let oldFibonacci = 1;
    let count = 0;
    let temp = 0;
    let total = 0;
    while (true) {
        temp = oldFibonacci;
        oldFibonacci = fibonacci;
        fibonacci = fibonacci + temp;
        total += fibonacci
        count++
        if (count == 20) {
            document.write("tổng của 20 số đầu tiên trong dãy fibonacci: " + total)
            break;
        }

    }
}

// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên. 

function exe6() {
    let num = 30;
    let i = 1;
    let sum = 0;
    while (i <= num) {
        sum += i * 7;
        i++;
    }
    document.write("tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên: " + sum);
}

// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".

function exe7() {
    let i = 1;
    while (i <= 100) {
        if (i % 3 == 0 && i % 5 == 0) {
            document.write('</br> FizzBuzz');
        } else if (i % 3 == 0) {
            document.write('</br> Fizz');
        } else if (i % 5 == 0) {
            document.write('</br> Buzz');
        } else {
            document.write('</br>' + i);
        }
        i++;

    }
}

// Bài 8: Game đoán số

function exe8() {
    let min, max;
    do {
        min = Number(prompt("Input min: "))

    } while (Number.isNaN(min))
    do {
        max = Number(prompt("Input max: "))
    } while (Number.isNaN(max) || max <= min)

    let num = getRandomNumber(min, max);
    function getRandomNumber(min, max) {
        const range = max - min + 1;
        const random = Math.random() * range;
        const result = Math.floor(random) + min;
        return result;
    }
    let guess = 0;
    do {
        guess = Number(prompt("Enter your answer: "))
    } while (Number.isNaN(guess))
    console.log(num);

    while (true) {
        if (guess == num) {
            alert("Congratulation!!");
            break;
        } else if (guess > num) {
            alert("Lower please!")
            guess = Number(prompt("Enter your answer: "))
        } else {
            alert("Higher please!")
            guess = Number(prompt("Enter your answer: "))
        }
    }


}