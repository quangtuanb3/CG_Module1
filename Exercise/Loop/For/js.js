
// Bài 1: Viết chương trình hiển thị chuỗi “The number is N” 5 lần sử dụng vòng lặp for. Với N sẽ hiển thị từ 0 đến 5.
let text = '';
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

document.getElementById("text").innerHTML = text;


// Bài 2: Viết chương trình nhập vào một số bất kỳ lớn hơn 0. Tính tổng các phần tử từ 1 đến số vừa nhập vào.

function exercise2() {
    let sum = 0;
    let num = 0;
    do {
        num = Number(prompt('Input number: '))
    } while (num <= 0 || isNaN(num))

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    alert('sum = ' + sum)

}