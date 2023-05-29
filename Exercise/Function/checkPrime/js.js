function checkPrime() {
    let number = Number(document.getElementById("number").value)
    let resultEle = document.getElementById('result');
    if (number < 2 || !Number.isInteger(number)) {
        resultEle.innerText = `${number} isn't prime number`;
    } else if (number == 2) {
        resultEle.innerText = `${number} is prime number`;
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.floor(number / 2); i++) {
            if (number % i == 0) {
                resultEle.innerText = `${number} isn't prime number`;
                isPrime = false;
                return;
            }
        }
        if (isPrime) {
            resultEle.innerText = `${number} is prime number`;
        }
    }

}