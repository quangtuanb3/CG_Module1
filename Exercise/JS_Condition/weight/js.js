function process() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let resultEle = document.getElementById("result");
    let result = '';
    if (weight <= 0 || height <= 0) {
        resultEle.innerText = "Invalid value";
        return;
    }
    let bmi = weight / (height ** 2);
    console.log(bmi)

    if (bmi >= 30) {
        result = 'Obese';
    } else if (bmi >= 25) {
        result = 'Overweight';
    } else if (bmi >= 18.5) {
        result = 'Normal';
    } else {
        result = 'Underweight';
    }
    resultEle.innerText = result;
}

