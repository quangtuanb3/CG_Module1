let quantity = 0;
do {
    quantity = Number(prompt("Input quantity you want!: "));
} while (Number.isNaN(quantity) || !Number.isInteger(quantity) || quantity < 2)


let j = 2;
let count = 1;

while (j >= 2) {
    if (checkPrime(j)) {
        document.write(`${count}: ${j} </br>`);
        count++;
        if (count == quantity + 1) {
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
