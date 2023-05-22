// Bài 1 

let imgObj = document.getElementById('ball');
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 20 + 'px';
    console.log(imgObj.style.position);
    console.log(imgObj.style.left);
}
function init() {
    imgObj.style.position = 'relative';
    imgObj.style.left = '10px';
}

window.onload = init();
document.getElementById("btn").onclick = moveRight;