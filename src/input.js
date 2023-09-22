const readlineSync = require('readline-sync');

function getUserAnswer(message, choices, type) {
    let userAnswer;
    //Some questions will be answered as strings while others numbers. Numbers need to be converted, and strings need to be set to lowercase
    if (type === 'string') {
        userAnswer = readlineSync.question(`${message}`).toLowerCase();
    } else if (type === 'number') {
        userAnswer = Number(readlineSync.question(`${message}`));
    }
    return checkUserAnswer(userAnswer, choices) ? userAnswer : getUserAnswer(message, choices, type);
}

function checkUserAnswer(userAnswer, choices) {
    if (userAnswer && choices.includes(userAnswer)) {
        return true;
    } else {
        console.log('ERROR: Your answer must match one of the choices');
        return false;
    }
}

module.exports = {
    getUserAnswer
}