// Bài 1: Viết chương trình nhận vào một số từ hộp thoại, việc nhập kết thúc khi người dùng nhập vào giá trị -1. Mỗi giá trị nhập được sẽ được hiển thị ra và thực hiện tính tổng các giá trị đó.

function exercise1() {
    let num = 0;
    let sum = 0;
    while (num != -1) {
        num = Number(prompt('Input numbers: '));
        document.write(num)
        document.write("</br>")
        sum += num;
    }
    document.write(`sum = ${sum}`)
}

// Bài 2: Viết chương hình hiển thị thẻ <hr> theo độ rộng từ 1 đến 100. Kết quả sẽ được hiển thị như hình
function exercise2() {
    let width = 1;
    while (width <= 100) {
        document.write("<hr width = " + width + "%>");
        width++
    }
}