var states = {
    questions: [
        'When was the first Android OS released?',
        'What does Android N stand for?',
        'Who creates Android OS?',
        'How many versions of Android has released?',
        'Which is the flagship smartphone brand from Google for Android?'
    ],
    options: [
        { choices: ['2008', '2009', '2010', '2007'], correct: 1},
        { choices: ['Nougat', 'Nutella', 'Nachos', 'Nothing'], correct: 1},
        { choices: ['Microsoft', 'Google', 'Amazon', 'Apple'], correct: 2},
        { choices: ['14', '10', '15', '5'], correct: 1},
        { choices: ['Nexus', 'Pixel', 'Wear', 'Auto'], correct: 2}
    ],
    totalQuestions: 5,
    currentQuestion: 0,
    correctAnswers: 0,
    wrongAnswers: 0
}

function getQuestion(state, index) {
    return state.questions[index];
}

function getChoices(state, index) {
    return state.options[index].choices;
}

function getCorrectChoice(state, index) {
    return state.options[index].correct;
}

function getTotalQuestions(state) {
    return state.totalQuestions;
}

function getCurrentQuestion(state) {
    return state.currentQuestion;
}

function updateCurrentQuestion(state, updatedQuestionNumber) {
    state.currentQuestion = updatedQuestionNumber;
}

function updateCorrectAnswers(state, updatedCorrectAnswers) {
    state.correctAnswers = updatedCorrectAnswers;
}

function updateWrongAnswers(state, updatedWrongAnswers) {
    state.wrongAnswers = updatedWrongAnswers;
}
