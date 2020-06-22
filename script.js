var opc = "";
//Question template
function qst(){
    this.a = "";
    this.b = "";
    this.c = "";
    this.d = "";
    this.answer = "";
    this.question ="";
    this.userAnswer = "";
    this.wrongAnswer = "";
}
// Quiz preparation
q1 = new qst();
q1.question = "What does event.preventDefault() do?";
q1.a ="stops the default action of an element from happening.";
q1.b = "Prevents HTML elements from deleting when accidentally hitting backspace.";
q1.c ="Prevents the cat from losing weight";
q1.d = "Prevents bootstrap columns from resetting ";
q1.answer = "a";
q1.wrongAnswer = ["b", "c", "d"]

q2 = new qst();
q2.question = "What is Javascript?";
q2.a ="a scripting or programming language that allows you to implement complex features on web pages.";
q2.b = "describes how HTML elements are to be displayed on screen, paper, or in other media";
q2.c ="an interpreted, high-level, general-purpose programming language.";
q2.d = "a general-purpose programming language created by Bjarne Stroustrup";
q2.answer = "a";

q3 = new qst();
q3.question = "What are APIs user for?";
q3.a ="";
q3.b = "blue";
q3.c ="baby blue";
q3.d = "an API specifies how software components should interact.";
q3.answer = "d";

q4 = new qst();
q4.question = "This is my favorite color";
q4.a ="Red";
q4.b = "blue";
q4.c ="baby blue";
q4.d = "lightcoral";
q4.answer = "c";

q5 = new qst();
q5.question = "This is my favorite color";
q5.a ="Red";
q5.b = "blue";
q5.c ="baby blue";
q5.d = "lightcoral";
q5.answer = "c";







function givenAnswer(){


}

function begin(){

}

function highscores(){
}

function setOpc(op) {
    opc = op;
    alert(opc);
}