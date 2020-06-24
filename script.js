var opc = "";
//Question template
var eusn = document.getElementById("usn");
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
var UserName = ""; ////////////
var start = document.getElementById("start-btn");
var interval;
var timerDisplay = document.getElementById("timer");
var totalSeconds = 60;
// var gameEndDisplay = document.getElementById("gameOver");
// var startOver = document.getElementById("end-btn");
// var startOver = document.getElementById("end-btn").style.display = "none"
// var saveBtn = document.getElementById("save-btn").style.display = "none";
var endTitle = document.getElementById("end-container");
var gameEndDisplay = document.getElementById("gameOver");



    function timer() {
        start = document.getElementById("start-btn-div").style.display = "none";
        interval = setInterval(function() {
            totalSeconds--;
            if (totalSeconds >= 0) {
                timerDisplay.textContent = totalSeconds + " seconds left";
            } else {
                clearInterval(interval);
                var quizEL = document.getElementById("answer-btns").style.display = "none";
                gameEndDisplay.innerHTML = "Sorry you ran out of time.";
                endTitle.setAttribute("style", "display: block;");




            }
        }, 1000);
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

    //user template
    function user() {
        this.name = "";
        this.score = 0;
        // this.quizobj = [];
        this.date = new Date();
        this.time=0;
        this.sscore=function(){return this.score+" out of "+this.totalQuestions};
        this.totalQuestions=0;

    }

    function qst() {
        this.a = "";
        this.b = "";
        this.c = "";
        this.d = "";
        this.answer = "";
        this.question = "";
        this.userAnswer = "";
        this.result = 0;
    }
    // Quiz preparation
    // quiz placeholder




q1 = new qst();
q1.question = "What is Javascript?";
q1.a = "a scripting or programming language that allows you to implement complex features on web pages.";
q1.b = "describes how HTML elements are to be displayed on screen, paper, or in other media";
q1.c = "an interpreted, high-level, general-purpose programming language.";
q1.d = "a general-purpose programming language created by Bjarne Stroustrup";
q1.answer = "a";
arrQ.push(q1);
actualQ = q1;


q2 = new qst();
q2.question = "What are APIs user for?";
q2.a = "An API allows me dictates how large the cache files can be";
q2.b = "An API allows me to make my browser load videos faster";
q2.c = "An API allows me to change colors in a div";
q2.d = "An API specifies how software components should interact";
q2.answer = "d";
arrQ.push(q2);



q3 = new qst();
q3.question = "Who created Javascript?";
q3.a = "Mitchell Baker";
q3.b = "Brendan Eich";
q3.c = "Gottfried Leibniz";
q3.d = "Bruce Wayne";
q3.answer = "b";
arrQ.push(q3);



q4 = new qst();
q4.question = "Who created APIs";
q4.a = "Roy Fielding";
q4.b = "Steph Curry";
q4.c = "Bill Gates";
q4.d = "Bjarne Stroustrup";
q4.answer = "a";
arrQ.push(q4);

q5 = new qst();
q5.question = "What does event.preventDefault() do?";
q5.a = "stops the default action of an element from happening.";
q5.b = "Prevents HTML elements from deleting when accidentally hitting backspace.";
q5.c = "Prevents the cat from losing weight";
q5.d = "Prevents bootstrap columns from resetting ";
q5.answer = "a";
arrQ.push(q5);
//localStorage.setItem("allusers","");


function scores() {

}

function subm() { 
            actualQ=arrQ[nxtQ];
            //setQuestion(actualQ);
            actualQ.userAnswer=opc;
    if (nxtQ < 5) { 
         //alert("right answ = "+actualQ.answer+"\n\nuser amsw= "+actualQ.userAnswer);
          if (actualQ.answer != actualQ.userAnswer) {
            totalSeconds -= 5;

            if (score > 0) {
            //    score --;
   
            } 
            
      //       alert(score+"right answer = " + r + "\n wrong answers = " + arrQ.length - r);
        }
         else {
             score++;
    //    alert("good-lauro"+score)
         }  
         
          nxtQ++;    
          if(nxtQ!=5){setQuestion(actualQ=arrQ[nxtQ]);
          //alert(nxtQ);  
          }

      }
      //
       if(nxtQ==5) {
        
          clearInterval(interval);
          var quizEL = document.getElementById("answer-btns").style.display = "none";
          gameEndDisplay.innerHTML = "Game Over.";
          endTitle.setAttribute("style", "display: block;");

    
    }
 
}

function begin() {
    nxtQ=0;
    opc="";
    score=0;
    document.getElementById("answer-btns").style.display = "block";
    if (typeof(Storage) !== "undefined") {
        // Store
        // if(localStorage.getItem("test")=="") alert("Nothign in name.")
        // else alert(localStorage.getItem("test"))
        // localStorage.setItem("test",eusn.value);
        
         } else {
        alert("Sorry, your browser does not support Web Storage...");
      }



   score=0;
    setQuestion(arrQ[nxtQ]);
    var titleEl = document.getElementById("titles").style.display = "none";;
    nxtQ=0;
 }

function setQuestion(q) {
    eq.innerHTML = q.question;
    ea.innerHTML = q.a;
    eb.innerHTML = q.b;
    ec.innerHTML = q.c;
    ed.innerHTML = q.d;
    actualQ = q;

}

function highscores() {}

function setOpc(op) {
    opc = op;
 }

start.addEventListener("click", timer);

function save(){
   // alert(localStorage.getItem("test"));
    
    //load all users in allus, when parse create an array;
    var allus=localStorage.getItem("allusers");
    // if(allus==null){alert("allus not saved yet");allus="";}
    // else alert(allus);

    auser=new user();//create a new template of user
   // alert(allus)
  
    auser.name=eusn.value;
    auser.score=score;
    auser.totalQuestions=arrQ.length;
    auser.time=totalSeconds;
    var sobj=JSON.stringify(auser)
    allus+=sobj+"@";

    localStorage.setItem("allusers",allus);

alert("Your progress has been saved.")

}
//try

function showobjs(){
var ar=[];
var totalobj=localStorage.getItem("allusers");
var sar=totalobj.split("@");

var hiname="";
var hiscore=0;
var teTime = 0;


for(var i=0;i<sar.length-1;i++){

    var te=JSON.parse(sar[i]);
    

  if(hiscore<te.score) {
      hiscore=te.score;
      hiname=te.name;
  
teTime = te.time;
   

  }

}
 //alert("okat")
    document.getElementById("showScores").style.display = "block";
    document.getElementById("pScores").innerHTML = "User Name: "+hiname+"<br> <br>High score :"+ hiscore+"<br><br>in a time of: " + teTime; 
//     alert("nook");
}

function hideShow(){
    document.getElementById("showScores").style.display = "none";
    
}

function getHighScore(){
    var all=JSON.parse(localStorage.getItem("allusers"));
    var ac=0;
    var tus={};
    for(var i=0;i<allus.length;i++){
        var acc=allus[i].score*1;
        if(acc>ac){
             ac=acc;
             tus=allus[i];
        }
        // returns the user with the highest score
        return tus;

}
}

function resetUsers(){
    
    var r = prompt(" All users will be deleted. Are you sure want to continue? type 'y' or 'n'", "n")
    if (r === "y"){
        localStorage.setItem("allusers", "");
    }

}

function startOver(){
     document.getElementById("answer-btns").style.display = "none";
     document.getElementById("titles").style.display = "block";
    eusn.value = "";
    document.getElementById("start-btn-div").style.display = "block";
    document.getElementById("start-btn-div").style.textAlign = "center";
          endTitle.setAttribute("style", "display: none;");
}
