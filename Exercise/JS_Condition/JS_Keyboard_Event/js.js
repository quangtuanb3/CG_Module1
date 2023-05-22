window.addEventListener('keydown', e => {
    e.key === 'ArrowUp' ? moveUp() :
        e.key === 'ArrowDown' ? moveDown() :
            e.key === 'ArrowLeft' ? moveLeft() :
                e.key === 'ArrowRight' ? moveRight() :
                    document.getElementById("info").innerText = "Please use arrow key"

})

let nobita = document.getElementById("nobita");
function init() {
    nobita.style.position = 'relative';
    nobita.style.top = '50px';
    nobita.style.left = '30px';


}

function moveUp() {
    nobita.style.top = `${parseInt(nobita.style.top) - 20}px`;
}
function moveLeft() {
    nobita.style.left = `${parseInt(nobita.style.left) - 20}px`;
}
function moveDown() {
    nobita.style.top = `${parseInt(nobita.style.top) + 20}px`;
}
function moveRight() {
    nobita.style.left = `${parseInt(nobita.style.left) + 20}px`;
}
window.onload = init();