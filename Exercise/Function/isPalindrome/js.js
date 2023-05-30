
function exe() {
    var word = prompt("Input a string:");
    if (isPalindrome(word)) {
        alert(`${word} is palindrome`);
    } else {
        alert(`${word} isn't palindrome`);
    }
}

function isPalindrome(word) {
    if (word.length <= 1) {
        return true;
    }
    if (word[0] !== word[word.length - 1]) {
        return false;
    }
    return isPalindrome(word.slice(1, -1));
}