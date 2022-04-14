// Step 1: Add a timer and present a question.

var questions = [
    {
        prompt: "What tag do I use to write a heading in HTML?\n(a) <h1>\n(b) <h2>\n(c) both a and b\n(d) <p>",
        answer: "c"
    },
    {
        prompt: "What programming language would I use to style a webpage?\n(a) html\n(b) css\n(c) python\n(d) javascript",
        answer: "b"
    }
]
var score = 0;



document.querySelector("#start").addEventListener("click", )
function Function() {
    setTimeout(setAlert, 120000);
}
function setAlert() {
  alert("Time is up!");
// Step 2: Answering question should make another question appear.
// Step 3: If question is answered incorrectly, time should be subtracted from the clock
// Step 4: Game is over when timer reaches 0
// Step 5: When game is over, then initials and score are saved 