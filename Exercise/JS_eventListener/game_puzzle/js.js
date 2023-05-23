function changeImg(id) {
    let currentIndex = getCurrentImgIndex(id);
    let randomIndex = getRandomInt(3, currentIndex);
    let newSrc = listImg[randomIndex][id - 1];
    document.getElementById(id).src = newSrc;
    checkCorrect(id)
}

let listImg = [
    ['./img/cat1.jpg', './img/cat2.jpg', './img/cat3.jpg', './img/cat4.jpg', './img/cat5.jpg'],
    ['./img/monkey1.jpg', './img/monkey2.jpg', './img/monkey3.jpg', './img/monkey4.jpg', './img/monkey5.jpg'],
    ['./img/panda1.jpg', './img/panda2.jpg', './img/panda3.jpg', './img/panda4.jpg', './img/panda5.jpg'],
];

function getCurrentImgIndex(id) {
    let imgSrc = document.getElementById(id).src;
    let newSrc = imgSrc.substring(imgSrc.lastIndexOf('/') + 1);
    let index = -1;
    for (let i = 0; i < listImg.length; i++) {
        let subArray = listImg[i];
        if (subArray.includes('./img/' + newSrc)) {
            index = i;
            break;
        }
    }
    return index;
}

function getRandomInt(max, current) {
    let random;
    do {
        random = Math.floor(Math.random() * max);
    } while (random === current);
    return random;
}

function checkCorrect(id) {
    let img1 = document.getElementById('1').src;
    let img2 = document.getElementById('2').src;
    let img3 = document.getElementById('3').src;
    let img4 = document.getElementById('4').src;
    let img5 = document.getElementById('5').src;

    let img1src = './img/' + img1.substring(img1.lastIndexOf('/') + 1);
    let img2src = './img/' + img2.substring(img2.lastIndexOf('/') + 1);
    let img3src = './img/' + img3.substring(img3.lastIndexOf('/') + 1);
    let img4src = './img/' + img4.substring(img4.lastIndexOf('/') + 1);
    let img5src = './img/' + img5.substring(img5.lastIndexOf('/') + 1);

    let checkArray = [img1src, img2src, img3src, img4src, img5src]


    for (let i = 0; i < listImg.length; i++) {
        let subArray = listImg[i];

        if (arraysAreEqual(subArray, checkArray)) {
            let imgEles = document.getElementsByTagName("img");
            for (let i = 0; i < imgEles.length; i++) {
                imgEles[i].style.border = '5px solid rgb(125, 237, 125)'
            }
            break;
        }
        else {
            let imgEles = document.getElementsByTagName("img");
            for (let i = 0; i < imgEles.length; i++) {
                imgEles[i].style.border = 'none'
            }
        }
    }


}
function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}