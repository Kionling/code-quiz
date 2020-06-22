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
    interval = setInterval(function() {
        totalSeconds--;
    timerDisplay.textContent = totalSeconds + " seconds left";

    },1000);
}





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
q1.question = "What does event.preventDefault() do?";
q1.a ="stops the default action of an element from happening.";
q1.b = "Prevents HTML elements from deleting when accidentally hitting backspace.";
q1.c ="Prevents the cat from losing weight";
q1.d = "Prevents bootstrap columns from resetting ";
q1.answer = "a";
q1.wrongAnwer = 
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

function scores(){
    if (qst === answer) {

    }
}







function givenAnswer(){
    nxtQ++;
    if (nxtQ < 6){
        setQuestion(arrQ[nxtQ]);
    }
    else {


    }
    // if (opc === q1.answer){
    //     alert("Correct!");
    //     actualQ.userAnswer = opc;
    // }
    // else {
    //     alert("Wrong!")
    // }
}

function begin(){
    setQuestion(arrQ[nxtQ]);
    document.getElementById("")


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
