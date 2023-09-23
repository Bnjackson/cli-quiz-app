const inputModule = require('./input');

let score = 0;

function runQuiz(questions) {
    score = 0;
    //Have to reset score, for cases where user plays again. Otherwise old score is kept and added to new score.
    for (let i = 0; i < questions.length; i++) {
        askQuestion(questions[i]);
    }
    calculateScore();
}

function askQuestion(question) {
    if (inputModule.getUserAnswer(question.question, question.options, question['correct_answer'])) {
        console.log(`Well done that was the correct answer`);
        score++;
    } else {
        console.log(`Sorry the correct answer was ${question['correct_answer']}`);
    }
}

function calculateScore() {
    const percentage = (score / 10) * 100;
    if (percentage >= 100) {
        console.log(`You did it! You got ${percentage}%`);
    } else if (percentage > 70  && percentage < 100) {
        console.log(`Well done, you nearly got everything right. You got ${percentage}%`);
    } else if (percentage > 50 && percentage <= 70) {
        console.log(`Good job, but you can still do better. You got ${percentage}%`);
    } else if (percentage > 25 && percentage <= 50) {
        console.log(`It could be worse, you did okay. You got ${percentage}%`)
    } else {
        console.log(`It could not be any worse. You did terrible. You got ${percentage}%`);
    }
}

module.exports = {
    runQuiz
}