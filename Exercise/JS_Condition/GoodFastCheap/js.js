function checkCondition(id) {
    let goodEle = document.getElementById("good");
    let cheapEle = document.getElementById("cheap");
    let fastEle = document.getElementById("fast");
    switch (id) {
        case "good":
            if (cheapEle.checked && fastEle.checked) {
                fastEle.checked = false
            }
            break;
        case 'cheap':
            if (fastEle.checked && goodEle.checked) {
                goodEle.checked = false;
            }
        case 'fast':
            if (goodEle.checked && cheapEle.checked) {
                cheapEle.checked = false;
            }
    }

}