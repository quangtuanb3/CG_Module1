let Lm = "CDXCIX";
//499
// 1908 "MCMVIII";

"I   V   X   L   C   D   M "
"1   5   10  50  100 500 1000"
// let temp = 'MDCLXVI'
let arr = [];
for (let i = 0; i < Lm.length; i++) {
    switch (Lm[i]) {
        case "M": arr.push(1000);
            break;
        case "D": arr.push(500);
            break;
        case "C": arr.push(100);
            break;
        case "L": arr.push(50);
            break;
        case "X": arr.push(10);
            break;
        case "V": arr.push(5);
            break;
        case "I": arr.push(1);
            break;
    }
}
let newArr = [];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
        sum += arr[i];

    } else if (arr[i] < arr[i + 1]) {
        sum += arr[i + 1] - arr[i];
        i = i + 1;
    } else if (arr[i + 1] == undefined) {
        sum += arr[i];
    }
}
console.log(sum)