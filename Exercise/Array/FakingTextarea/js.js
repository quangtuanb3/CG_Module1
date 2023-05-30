function changeText() {
    let defaultText = 'I am a student!!';
    let textEle = document.getElementById("textarea");
    let inputText = textEle.value;
    textEle.value = '';
    if (inputText.length <= defaultText.length) {
        textEle.value = defaultText.slice(0, (inputText.length))
    } else {
        textEle.value = defaultText.slice(0, (inputText.length - defaultText.length))
    }
}

