var opc = "";
//Question template
var ea = document.getElementById("lopA");
var eb = document.getElementById("lopB");
var ec = document.getElementById("lopC");
var ed = document.getElementById("lopD");
var eq = document.getElementById("questionEL");
var actualQ = undefined;
var nxtQ = 0;
var arrQ = [];
var score = 0;
var count = 5;
var start = document.getElementById("start-btn");
var interval;
var timerDisplay = document.getElementById("timer");
var totalSeconds = 60;
// var gameEndDisplay = document.getElementById("gameOver");
// var startOver = document.getElementById("end-btn");
// var startOver = document.getElementById("end-btn").style.display = "none"
// var saveBtn = document.getElementById("save-btn").style.display = "none";
var endTitle = document.getElementById("end-container");
var gameEndDisplay = document.getElementById("gameOver")



function timer(){
    start = document.getElementById("start-btn").style.display = "none";
    interval = setInterval(function() {
        totalSeconds--;
    if (totalSeconds >= 0){
        timerDisplay.textContent = totalSeconds + " seconds left";
    }
    else {
        clearInterval(interval);
        var quizEL = document.getElementById("answer-btns").style.display = "none";
        gameEndDisplay.innerHTML = "Sorry you ran out of time.";
        endTitle.setAttribute("style", "display: block;");
        
        

        
    }
    },1000);
}

/*
function timer(){
    interval = setInterval(function() {
        totalSeconds--;
    timerDisplay.textContent = totalSeconds + " seconds left";
    if (opc === q1.answer){
        totalSeconds += 5;
        timerDisplay.textContent = totalSeconds + " seconds left";
        console.log(timer);
    if (opc === wrongAnswer) {
        totalSeconds -= 5;
        timerDisplay.textContent + " seconds left";
    }
    }
    },1000);
}

*/




function qst(){
    this.a = "";
    this.b = "";
    this.c = "";
    this.d = "";
    this.answer = "";
    this.question ="";
    this.userAnswer = "";
    this.result = 0;
}
// Quiz preparation
// quiz placeholder




q1 = new qst();
q1.question = "What is Javascript?";
q1.a ="a scripting or programming language that allows you to implement complex features on web pages.";
q1.b = "describes how HTML elements are to be displayed on screen, paper, or in other media";
q1.c ="an interpreted, high-level, general-purpose programming language.";
q1.d = "a general-purpose programming language created by Bjarne Stroustrup";
q1.answer = "a";
arrQ.push(q1);
actualQ = q1;


q2 = new qst();
q2.question = "What are APIs user for?";
q2.a ="An API allows me dictates how large the cache files can be";
q2.b = "An API allows me to make my browser load videos faster";
q2.c ="An API allows me to change colors in a div";
q2.d = "An API specifies how software components should interact";
q2.answer = "d";
arrQ.push(q2);



q3 = new qst();
q3.question = "Who created Javascript?";
q3.a ="Mitchell Baker";
q3.b = "Brendan Eich";
q3.c ="Gottfried Leibniz";
q3.d = "Bruce Wayne";
q3.answer = "b";
arrQ.push(q3);



q4 = new qst();
q4.question = "Who created APIs";
q4.a ="Roy Fielding";
q4.b = "Steph Curry";
q4.c ="Bill Gates";
q4.d = "Bjarne Stroustrup";
q4.answer = "a";
arrQ.push(q4);

q5 = new qst();
q5.question = "What does event.preventDefault() do?";
q5.a ="stops the default action of an element from happening.";
q5.b = "Prevents HTML elements from deleting when accidentally hitting backspace.";
q5.c ="Prevents the cat from losing weight";
q5.d = "Prevents bootstrap columns from resetting ";
q5.answer = "a";
arrQ.push(q5);


function scores(){

}







function givenAnswer(){
    
    if (nxtQ < 6){
        setQuestion(arrQ[nxtQ]);
    actualQ = arrQ[nxtQ];

    if ( actualQ.answer != actualQ.userAnswer){
        totalSeconds -= 5;

         if(score > -1){
            score -= 1;
        }
    }
    else {
        score++;
    }

    // alert("user answer" + actualQ.userAnswer + "\n correct answer" + actualQ.answer);

}


    else {
        var r = 0, w = 0;
        for(var i = 0; i < arrQ.length; i++){
            r += arrQ[i].result * 1;
            
        }
        
        alert("right answer = " + r + "\n wrong answers = " + arrQ.length - r);
    }
    
    nxtQ++;
    actualQ = arrQ[nxtQ];
}

function begin(){
    setQuestion(arrQ[nxtQ]);
    var titleEl = document.getElementById("titles").style.display = "none";



}

function setQuestion(q){
    eq.innerHTML = q.question;
    ea.innerHTML = q.a;
    eb.innerHTML = q.b;
    ec.innerHTML = q.c;
    ed.innerHTML = q.d;
    actualQ = q;

}

function highscores(){
}

function setOpc(op) {
    opc = op;
    actualQ.userAnswer = opc;
   
    // alert(opc);
    
}

start.addEventListener("click", timer);
