// question dataBase
// question:[answer,option1,option2...];
var questionList = {
    "What is the capital of United State": ["Washington, D.C.", "New York", "Los Angelas", "San Francisco"],
    "1+2+3+...+98+99+100=": [5050, 4950, 5000, 5100],
    "Which of the following is <strong>NOT</strong> a programming language": ["Turing", "Basic", "Fortran", "Pascal"],
    "Who is the first exploer to circumnagivate the world": ["Ferdinand Magellan", "Vasco da Gama", "Christopher Columbus", "Marco Polo"]
};

const qtime = 30;       // [s] time for each questoin
var time = qtime;       //[s] current time

const qTotal = 4;       // total num of questions
var qRemain = qTotal;
var qCorrect = 0;       // correct questions

var timerHandle

$(document).on("click", "#btn-start", newGame);

function newGame() {
    time = qtime;
    qRemain = qTotal;
    $('.main_panel').empty();
    $('.main_panel').html(`
        <div class="timer"> Time: ${time} s</div>
        <div class="content_panel">
            <div class="question"></div>
            <div class="options"></div>    
    `
    )
    // create timer
    timerHandle = setInterval(countDown, 1000);
    // create questions

    // update page
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
function gameOver(){
    alert(gameOver);
}


/* check answer and go to the next questions if available
*/
function check(){

}