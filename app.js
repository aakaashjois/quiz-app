var states = {
    questions: [
        'When was the first Android OS released?',
        'What does Android N stand for?',
        'Who creates Android OS?',
        'How many versions of Android has released?',
        'Which is the flagship smartphone brand from Google for Android?'
    ],
    options: [{
            choices: ['2008', '2009', '2010', '2007'],
            correct: 1
        },
        {
            choices: ['Nougat', 'Nutella', 'Nachos', 'Nothing'],
            correct: 1
        },
        {
            choices: ['Microsoft', 'Google', 'Amazon', 'Apple'],
            correct: 2
        },
        {
            choices: ['14', '10', '15', '5'],
            correct: 1
        },
        {
            choices: ['Nexus', 'Pixel', 'Wear', 'Auto'],
            correct: 2
        }
    ],
    totalQuestions: 5,
    currentQuestion: 0,
    correctAnswers: 0,
    wrongAnswers: 0
}

function setQuestion() {
    $('.js-progress').text("Question " + (states.currentQuestion + 1) + " of " + (states.totalQuestions));
    $('.js-question').text(states.questions[states.currentQuestion]);
    for (var i = 0; i < 4; i++) $($('.js-quiz')).find('#option-' + (i + 1)).next().text(states.options[states.currentQuestion].choices[i]);
    $('.js-report').text(+states.correctAnswers + " Correct and " + states.wrongAnswers + " Wrong");
}

function startQuiz() {
    $('.js-start').addClass('hidden');
    $('.js-quiz').removeClass('hidden');
    setQuestion();
}

function submitAnswer() {
    var checked = $('input[name=choices]:checked', '.js-quiz').val();
    var correct = states.options[states.currentQuestion].correct;
    $('.js-quiz').addClass('hidden');
    $('.js-result').removeClass('hidden');
    if (checked != undefined) {
        if (checked == correct) {
            $('.js-status').text("Correct!");
            states.correctAnswers++;
        } else {
            $('.js-status').text("Wrong! The right answer is '" + states.options[states.currentQuestion].choices[correct - 1] + "'.");
            states.wrongAnswers++;
        }
    }
}

function nextQuestion() {
        states.currentQuestion++;
        if (states.currentQuestion < states.totalQuestions) {
            $('.js-result').addClass('hidden');
            $('.js-quiz').removeClass('hidden');
            setQuestion();
        } else displayResult();
}

function displayResult() {
    $('.js-quiz').addClass('hidden');
    $('.js-result').removeClass('hidden');
    $('.js-status').text("Your final score is " + states.correctAnswers + " out of " + states.totalQuestions);
    $('.js-proceed').addClass("hidden");
    $('.js-restart').removeClass("hidden");
}