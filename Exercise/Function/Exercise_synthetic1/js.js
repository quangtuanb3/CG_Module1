// Bài 1: Tạo hàm alertMessage() hiển thị hộp thoại chứa chuỗi  "Xin chao". Gọi hàm từ trong phần <body> của trang web.
function alertMessage() {
    alert('Xin chào')
}

// Bài 2: Tạo hàm nhận vào một đối số dạng số, tăng giá trị đối số đó lên 1 và trả lại giá trị cho lời gọi hàm. Gọi hàm từ trong phần <body> của trang web và hiển thị kết quả lên màn hình.
function exe2() {
    let num = 0;
    do {
        num = Number(prompt("Enter a number: "));

    } while (isNaN(num));
    let newNumber = mul(num);
    alert(newNumber)

}
function mul(num) {
    return num + 1;
}

// Bài 3: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.

function exe3() {
    let num1 = 0;
    let num2 = 0;
    do {
        num1 = Number(prompt("Enter number 1: "));

    } while (isNaN(num1));
    do {
        num2 = Number(prompt("Enter number 2: "));

    } while (isNaN(num2));
    let sum = checkAndAdd(num1, num2);
    alert(sum);

}
function checkAndAdd(num1, num2) {
    if (num1 > num2) {
        alert(`${num1} > ${num2}`);
    } else {
        return num1 + num2;
    }
}

// Bài 4: Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau để bạn có thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm. Đoạn mã có dạng như sau:
// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     return result;
// }
// result = 0;
// result = addNumbers(); 
function exe4() {
    function addNumbers() {
        firstNum = 4;
        secondNum = 8;
        result = firstNum + secondNum;
        return result;
    }
    result = 0;
    alert('Before: ' + result)
    result = addNumbers();
    alert('After: ' + result)

}


// Bài 5: Tạo một mảng với bảy phần tử dạng chuỗi có giá trị là tên các ngôi sao sau: Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe và Regulus. Tạo một mảng khác với bảy phần tử dạng chuỗi có giá trị là tên các chòm sao tương ứng chứa các ngôi sao: Ursa Minor, Tarurus, Cygnus, Lyra, Aquila, Ursa Major và Leo. Tiếp theo, tạo một hàm nhận vào một tham số dạng chuỗi duy nhất. Trong hàm này, duyệt qua mảng thứ nhất để tìm tên ngôi sao. Nếu tìm thấy, trả lại giá trị tương ứng với chỉ số đó ở mảng thứ hai. Nói cách khác, trả lại tên chòm sao của ngôi sao đó. Trong phần <body> của trang web, dùng hộp thoại prompt để người dùng nhập vào tên của ngôi sao, sau đó gọi hàm với thông tin đầu vào. Đừng quên xử lý trong trường hợp không tìm thấy ngôi sao nào. Cho kết quả hiển thị trên màn hình.

function exe5() {
    let stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let constellations = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

    let inputStar = prompt("Input a star: ");
    let index = -1;
    stars.forEach((star, i) => {
        if (inputStar == star) {
            index = i;
        }
    })
    console.log(index);
    if (index == -1) {
        alert('Not Found!')
    } else {
        alert(`${inputStar} belong to ${constellations[index]}`)
    }
}