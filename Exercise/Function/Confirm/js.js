
let confirmAnswer = confirm('Shall we paly a game?');
let processConfirm = function (answer) {
    let result = '';
    if (answer) { result = "Excellent. We'll play a nice game of chess."; }
    else {
        result = "Maybe later then.";
    }
    return result;
}
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer)    