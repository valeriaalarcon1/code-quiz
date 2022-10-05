//          DEPENDENCIES (DOM ELEMENTS)           //

var empty = ''
// start quiz button
var startButton = document.getElementById('start-button');
// Start Screen
var startScreen = document.querySelector('.start-screen');
// timer element
var timer = document.querySelector('.timer');
// question box
var questionBox = document.querySelector('.question-box');
questionBox.setAttribute("style", "display: none");
// game over screen
var gameOverScreen = document.querySelector('game-over');
// high scores screen
var highScoresScreen = document.querySelector('.high-scores');
// submit initials button
var submitButton = document.getElementById('submit-button');
// go back button
var goBackButton = document.getElementById('go-back-button');
// clear high scores button
var clearButton = document.getElementById('clear-button');
// view high scores button
var viewButton = document.getElementById('view-button');
// Question & Answer
var currentQuestion = 0


//                     DATA                       //
// number of seconds
var secondsLeft = 75;

// questions and answers
var questions = [
    {
        question: 'here is a question?',
        options: ["a", "b", "c", "d"],
        answer: "c"
    },
    {
        question: 'another question?',
        options: ["1", "2", "3", "4"],
        answer: "2"
    }
]





//                  FUNCTIONS                     //

// display start screen
// when start quiz button clicked, go to next page --> questions
startButton.addEventListener("click", function(event) {
    console.log("Start Game");
    startScreen.setAttribute("hidden", "true");
    startGame();
    // shuffleQuestions(questions);
    // showQuestion();
    setTime();
});

function startGame() {
    questionBox.setAttribute("style", "display: block");
//     startButton.classList.add('hide');
//     randomQuestions = questions.sort(() => Math.random() - .5);
//     currentQuestionIndex = 0;
//     currentQuestion.classList.remove('hide');
}

// start timer
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.innerHTML = "Timer: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000); 
}

// display question
function renderQuestion(question) {
    currentQuestion.textContent = question;
}

function renderOptions() {
    answerOptions.append(options);
}

function renderQuiz(questions, index) {
    var Q = questions[index];
    renderQuestion(Q.question);
    renderOptions(Q.options);
    console.log("Question");
    console.log(questions[index]);
}

// when answer buttton clicked
    // if incorrect, reduce time & display wrong --> next question
    // if correct, display correct --> next question
// when time reaches 0 -> display all done/game over screen
// timer stops
// when initials written and submit button clicked, go to next page --> high scores page
// when clear high scores screen, clear it
// when go back button clicked, return to start -> start quiz screen






//               USER INTERACTIONS                //

// user clicks start quiz button
// user clicks answers
// user types and submits initials for high score
// user clicks clear high scores (optional)
// user clicks go back






//                INITIALIZATION                  //
