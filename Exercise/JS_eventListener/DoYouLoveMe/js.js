function flyAway() {
    let btnNoEle = document.getElementById("btn-no");
    let x = Math.floor((Math.random() * 500));
    let y = Math.floor((Math.random() * 500));
    btnNoEle.style.left = x + 'px';
    btnNoEle.style.top = y + 'px';

}

window.onload = function () {
    let btnNoEle = document.getElementById("btn-no");
    btnNoEle.style.position = 'relative';
    btnNoEle.style.left = "200px";
    btnNoEle.style.top = "100px";
    btnNoEle.style.transition = "all 0.3s";

}
function sayYes() {
    alert("Yes, you're right!")
}