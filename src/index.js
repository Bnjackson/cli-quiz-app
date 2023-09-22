'use strict';

const inputModule = require('./input.js');
const quizModule = require('./quiz.js');

console.log(
`This program is a CLI based quiz. With 4 categories made up of 10 questions each. The categories are:

History
Sports
Music
Geography

All questions are multiple choiced. You will gain a point for each question answered correctly and will recieve your score at the end of the quiz.
Good luck.
`
)

function main() {
    const userCategoryChoice = inputModule.getUserAnswer('What category of questions would you like to choose? ', ["history", "sports", "music", "geography"], "string");
}


main()