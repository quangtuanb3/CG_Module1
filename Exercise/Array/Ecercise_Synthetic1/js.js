// Bài 1: Viết một chương trình Javascript để nối tất cả các phần tử trong một mảng chuỗi lại với nhau. Ví dụ có mảng chuỗi như sau: myColor = ["Red", "Green", "White", "Black"];
// Sau khi thực thi chương trình sẽ trả về dạng như sau : 

// "Red,Green,White,Black"
function exe1() {
    let myColor = ["Red", "Green", "White", "Black"];
    let newColor = myColor.toString();
    document.write(`${newColor}`)
}

// Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (-) giữa 2  số chẵn. Ví dụ nếu bạn nhập vào 025468 thì kết quả của chương trình sẽ là 0-254-6-8.

function exe2() {
    do {
        number = Number(prompt("Enter number: "));

    } while (isNaN(number) || !Number.isInteger(number))
    let digits = String(number).split("").map(Number);
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 == 0 & digits[i + 1] % 2 == 0) {
            digits.splice(i + 1, 0, '-')
        }
    }
    document.write(`${number} >>> ${digits.join("")}`)
}


// Bài 3: Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa. Ví dụ: nếu bạn nhập vào chuỗi 'The Quick Brown Fox' kết quả của chương trình là 'tHE qUICK bROWN fOX'.
function exe3() {
    let string = prompt("Enter string: ");
    let arrString = [];
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            arrString.push(string[i].toLowerCase())
            console.log(arrString);
        } else arrString.push(string[i].toUpperCase())
    }
    newString = arrString.join('');
    document.write(`${string} >>> ${newString}`)
}

// Exe: Create an array with 10 elements which random from 10 to 20 and display to screen;

function createArray() {
    let arrSize = 10;
    let arr = new Array(arrSize);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor((Math.random() * (20 - 10 + 1) + 10));
    }
    console.log(arr);
}