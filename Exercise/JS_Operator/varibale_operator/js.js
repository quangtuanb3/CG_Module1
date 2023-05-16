

// Exe1 
// Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học. Sau đó hiển thị điểm trung bình và tổng của những điểm này.

document.write('Exe1');
document.write('<br/>');
let chemistry = prompt('Input chemistry match: ')
let physical = prompt('Input chemistry match: ')
let biology = prompt('Input chemistry match: ')
let sum = (parseFloat(chemistry) + parseFloat(physical) + parseFloat(biology)).toFixed(1)
let average = (sum / 3).toFixed(1);
document.write('Enter chemistry match: ' + chemistry);
document.write('<br/>');

document.write('Enter physical match: ' + physical);
document.write('<br/>');


document.write('Enter biology match: ' + biology);
document.write('<br/>');

document.write('Sum: ' + sum);
document.write('<br/>');

document.write('Average: ' + average);
document.write('<br/>');

// Exe 2
// Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit). 
// [Hướng dẫn: C/5 = (F-32)/9]

document.write('<br/>');
document.write('Exe2');
document.write('<br/>');
let InputTemperature = prompt('Input temperature Celsius: ');
let celsius = parseFloat(InputTemperature).toFixed(1);
let fahrenheit = ((celsius / 5) * 9 + 32).toFixed(1);
document.write("Celsius: " + celsius + ' C');
document.write('<br/>');
document.write("Fahrenheit: " + fahrenheit + ' F');
document.write('<br/>');

// Exe 3
// Bài 3: Viết chương trình tính diện tích hình tròn
document.write('<br/>');
document.write('Exe3');
document.write('<br/>');
let inputR = prompt('Input radius: ');
let R = parseFloat(inputR);
let P = (3.14 * R * 2);
let S = (R * R * 3.14);
document.write("Input radius: " + inputR);
document.write('<br/>');
document.write("Perimeter: " + P);
document.write('<br/>');
document.write("Area: " + S.toFixed(2));