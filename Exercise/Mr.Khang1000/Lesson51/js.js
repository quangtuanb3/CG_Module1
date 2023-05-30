// Bài 51: Tìm chữ số lớn nhất của số nguyên dương n
function exe() {
    let num = 0;
    do {
        num = Number(prompt("Input number: "))
    } while (Number.isNaN(num))
    let max = findMaxDigit(num);
    alert(`Max digit in ${num}: ${max}`)
}

function findMaxDigit(num) {
    let digits = num.toString().split('').map(Number);
    let max = digits[0];
    for (let digit of digits) {
        if (max < digit) max = digit;
    }
    return max;
} 