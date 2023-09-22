const fs = require('fs');

async function getQuestionsData(category) {
    try {
        const data = fs.readFileSync(`./categories/${category}-questions.json`);
        const parsedData = JSON.parse(data);
        return parsedData;
    } catch (error) {
        console.log(`Error: Trying to read ../categories/${category}-questions.json`, error);
    }

}

module.exports = {
    getQuestionsData
}