let quantity = 20;
let j = 2;
let count = 1;

while (j >= 2) {
    if (checkPrime(j)) {
        console.log(`${count}: ${j}`);
        count++;
        if (count == 21) {
            break;
        }
    }
    j++;
}



function checkPrime(number) {
    let check = true;
    if (number == 2) {
        check = true;
    } else {
        for (let x = 2; x < number; x++) {
            if (number % x == 0) {
                check = false;
                return check;
            }
        }
    }
    return check;
}
