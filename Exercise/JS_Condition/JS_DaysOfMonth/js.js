function checkMonth() {
    btnEle = document.getElementById('btn');
    resultEle = document.getElementById("result");
    let month = Number(document.getElementById('month').value);
    // month <= 0 ? (resultEle.innerText = 'Invalid month', btnEle.disabled = true) : btnEle.disabled = false;
    let days = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 2:
            days = "28 or 29 days (leap year has 29 days)";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        default:
            days = 'không hợp lệ';
            break;
    }

    resultEle.innerText = `Tháng ${month} có ${days}`

}