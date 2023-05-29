function convertTemperature() {
    let tempF = document.getElementById("temp").value;
    let tempC = (tempF - 32) / 1.8;
    document.getElementById('result').innerText = tempC.toFixed(2);
}
document.getElementById('temp').onchange = convertTemperature;