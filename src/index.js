'use strict';

const inputModule = require('./input.js');
const quizModule = require('./quiz.js');
const fileHandlingModule = require('./file-handling.js');

console.log(
`This program is a CLI based quiz. With 4 categories made up of 10 questions each. The categories are:

History
Sports
Music
Geography

All questions are multiple choiced. You will gain a point for each question answered correctly and will recieve your score at the end of the quiz.
Good luck.`);

async function main() {
    let playAgain = true;
    //The playAgain variable is changed by the wantToPlayAgain function, while the variable is true the program will continue runnning 

    while (playAgain) {
        const userCategoryChoice = inputModule.getUserInput('What category of questions would you like to choose? ', ["history", "sports", "music", "geography"]);
        console.log(`You have chosen ${userCategoryChoice} as your category`);

        const questions = await fileHandlingModule.getQuestionsData(userCategoryChoice);
        quizModule.runQuiz(questions);

        wantToPlayAgain() ? playAgain = true : playAgain = false;
    }
    console.log('Thank you for using this program');
}

function wantToPlayAgain() {
    const usersChoice = inputModule.getUserInput('Would you like to play again? y/n ', ['y', 'n']);
    if (usersChoice === 'y') {
        return true;
    } else if (usersChoice === 'n') {
        return false;
    }
}

main()