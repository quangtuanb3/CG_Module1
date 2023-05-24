// Sử dụng vòng lặp do while để viết lại chương trình yêu cầu nhập các số từ 1 -> 10 ở ví dụ trong phần vòng lặp while.
let num = null;
do {
    num = Number(prompt("Input numbers:"));
} while (isNaN(num) || num < 1 || num > 10)
alert('Your input number is : ' + num)