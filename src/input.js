const readlineSync = require('readline-sync');

function getUserInput(message, choices) {
    let userInput = readlineSync.question(`${message}`).toLowerCase();
    return checkUserInput(userInput, choices) ? userInput : getUserInput(message, choices, type);
}

function checkUserInput(userInput, choices) {
    if (userInput && choices.includes(userInput)) {
        return true;
    } else {
        console.log('ERROR: Your input must match one of the choices');
        return false;
    }
}

function getUserAnswer(question, choices, correctAnswer) {
    console.log(`${question}`);
    console.log(`${choices}`);
    const userAnswer = Number(readlineSync.question('Enter the number that matches the answer 0-3: '));
    if (checkUserAnswer(userAnswer)) {
        if (choices[userAnswer] === correctAnswer) {
            return true;
        } else {
            return false;
        }
    } else {
        getUserAnswer(question, choices, correctAnswer);
    }
}


function checkUserAnswer(userAnswer) {
    const allowedAnswers = [0, 1, 2, 3];
    if (allowedAnswers.includes(userAnswer)) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    getUserInput,
    getUserAnswer
}