// question dataBase
// question:[answer,option1,option2...];
var questionList = {
    "What is the capital of United States": ["Washington, D.C.", "New York", "Los Angelas", "San Francisco"],
    "1+2+3+...+98+99+100=": [5050, 4950, 5000, 5100],
    "Which of the following is <strong>NOT</strong> a programming language": ["Turing", "Basic", "Fortran", "Pascal"],
    "Who is the first exploer to circumnagivate the world": ["Ferdinand Magellan", "Vasco da Gama", "Christopher Columbus", "Marco Polo"]
};

var questions = Object.keys(questionList);
var index = 0;      // index that used to track current question

const qTime = 30;       // [s] time for each questoin
var time = qTime;       //[s] current time
var timerHandle

const qTotal = 4;       // total num of questions
var qRemain = qTotal;
var qCorrect = 0;       // correct questionsv

$(document).on("click", "#btn-start", newGame);
$(document).on("click", "#btn-check", check);

function newGame() {
    console.log("starting new game...");
    // reset parameters;
    index = -1;
    qRemain = qTotal;
    nextQuestion();     // go to next question
}

/*  start a new quesiton/ start a new timing
*/
function nextQuestion() {
    if (++index < qTotal) {
        time = qTime;                                                 //reset timer
        // set up question page layout
        var options = [...questionList[questions[index]]];          // deep  clone the options
        $('.main_panel').empty();
        $('.main_panel').html(`
            <div class="timer"> Time: ${time} s</div>
            <div class="question_panel">
                <div class="question"> ${questions[index]}</div>
                <form class="option_panel">
                    <div class="option" id="A"><input type="radio" name="option"  value="A" />${options.splice(Math.floor(Math.random() * options.length), 1)}</div>
                    <div class="option" id="B"><input type="radio" name="option" value="B" />${options.splice(Math.floor(Math.random() * options.length), 1)}</div>
                    <div class="option" id="C"><input type="radio" name="option" value="C" />${options.splice(Math.floor(Math.random() * options.length), 1)}</div>
                    <div class="option" id="D"><input type="radio" name="option" value="D" />${options.splice(Math.floor(Math.random() * options.length), 1)}</div>
                </form>
                <button id="btn-check">Check</button>
        `
        );
        timerHandle = setInterval(countDown, 1000);                 // start counting
    } else {
        alert("it's already the last quesion!");
    }
}


/* decrese the time by 1[s]
   when reach 0[s], go to next game/game over
*/
function countDown() {
    // update time and display
    $('.timer').html(`Time: ${--time} s`);
    // check time
    if (time == 0) {
        // time's up, clear timer and check remaining quesions
        clearInterval(timerHandle);
        if (--qRemain <= 0) {
            gameOver();
        } else {
            check();
        }
    }
}

/* game over, restart new games
*/
function gameOver() {
    console.log(gameOver);
}


/* check answer and go to the next questions if available
*/
function check() {
    // stop the timer
    clearInterval(timerHandle);
    // check answer
    console.log("check!");
    var isCorrect = false;
    for (var i = 0; i < $('input').length; i++) {
        if ($($('input')[i]).prop("checked") == true && $('#' + $($('input')[i]).attr("value")).text()==questionList[questions[index]][0]) {
            console.log("correct!")
            isCorrect = true;
            qCorrect++;
            break;
        }
    }

    // display checking page
    if(isCorrect){

    }

    nextQuestion();
}