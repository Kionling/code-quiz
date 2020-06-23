var opc = "";
//Question template
var ea = document.getElementById("lopA");
var eb = document.getElementById("lopB");
var ec = document.getElementById("lopC");
var ed = document.getElementById("lopD");
var eq = document.getElementById("questionEL");
var actualQ = undefined;
var nxtQ = 1;
var arrQ = [];
var score = 0;
var count = 5;
var start = document.getElementById("start-btn");
var interval;
var timerDisplay = document.getElementById("timer");
var totalSeconds = 60;


// var interval = setInterval(function(){
//     document.getElementById('time').innerHTML=count;
//     count--;
//     if (count === 0){
//       clearInterval(interval);
//       document.getElementById('time').innerHTML='Done';
//       // or...
//       alert("You're out of time!");
//     }
//   }, 1000);

function timer(){
    start = document.getElementById("start-btn").style.display = "none";
    interval = setInterval(function() {
        totalSeconds--;
    if (totalSeconds >= 0){
        timerDisplay.textContent = totalSeconds + " seconds left";
    }
    else {
        clearInterval(interval);
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
}
// Quiz preparation
q1 = new qst();
q1.question = "";
q1.a ="";
q1.b = "";
q1.c ="";
q1.d = "";
q1.answer = "";
arrQ.push(q1);



q2 = new qst();
q2.question = "What is Javascript?";
q2.a ="a scripting or programming language that allows you to implement complex features on web pages.";
q2.b = "describes how HTML elements are to be displayed on screen, paper, or in other media";
q2.c ="an interpreted, high-level, general-purpose programming language.";
q2.d = "a general-purpose programming language created by Bjarne Stroustrup";
q2.answer = "a";
arrQ.push(q2);


q3 = new qst();
q3.question = "What are APIs user for?";
q3.a ="An API allows me dictates how large the cache files can be";
q3.b = "An API allows me to make my browser load videos faster";
q3.c ="An API allows me to change colors in a div";
q3.d = "An API specifies how software components should interact";
q3.answer = "d";
arrQ.push(q3);



q4 = new qst();
q4.question = "Who created Javascript?";
q4.a ="Mitchell Baker";
q4.b = "Brendan Eich";
q4.c ="Gottfried Leibniz";
q4.d = "Bruce Wayne";
q4.answer = "b";
arrQ.push(q4);



q5 = new qst();
q5.question = "Who created APIs";
q5.a ="Roy Fielding";
q5.b = "Steph Curry";
q5.c ="Bill Gates";
q5.d = "Bjarne Stroustrup";
q5.answer = "a";
arrQ.push(q5);

q6 = new qst();
q6.question = "What does event.preventDefault() do?";
q6.a ="stops the default action of an element from happening.";
q6.b = "Prevents HTML elements from deleting when accidentally hitting backspace.";
q6.c ="Prevents the cat from losing weight";
q6.d = "Prevents bootstrap columns from resetting ";
q6.answer = "a";
arrQ.push(q6);


function scores(){
}







function givenAnswer(){
    nxtQ++;
    if (nxtQ < 7){
        setQuestion(arrQ[nxtQ]);
    }
    //totalSeconds--;
    //timerDisplay.textContent = totalSeconds + " seconds left";
    if ( opc === q1.answer && q2.answer && q3.answer && q4.answer && q5.answer){
        totalSeconds += 5;
    }
    else {
        totalSeconds -= 5;
    }
    }
    // if (opc === q1.answer){
    //     alert("Correct!");
    //     actualQ.userAnswer = opc;
    // }
    // else {
    //     alert("Wrong!")
    // }


function begin(){
    setQuestion(arrQ[nxtQ]);

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
console.log(q1.question);