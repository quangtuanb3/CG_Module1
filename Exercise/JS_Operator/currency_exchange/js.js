
function exchangeMoney() {
    let resultElement = document.getElementById('result');
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    let exchangeRates = {
        'VND': { 'USD': 0.000043, 'EUR': 0.000037 },
        'USD': { 'VND': 23240, 'EUR': 0.82 },
        'EUR': { 'VND': 27050, 'USD': 1.22 }
    };

    let exchangeRate = exchangeRates[fromCurrency][toCurrency];
    let convertedAmount = amount * exchangeRate;
    resultElement.innerText = 'Result is: ' + convertedAmount.toLocaleString()
}


let convertBtn = document.getElementById('convert');

convertBtn.addEventListener('click', exchangeMoney)