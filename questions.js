// Step 1: Add a timer and present a question.
// Step 2: Answering question should make another question appear.
// Step 3: If question is answered incorrectly, time should be subtracted from the clock
// Step 4: Game is over when timer reaches 0
// Step 5: When game is over, then initials and score are saved 
var questions = [
    {
        question: "What tag do I use to write a heading in HTML?",
        option1:"A.asdf",
        option2:"B.fghfhhj",
        option3:"C.ytuy78",
        option4:"D.ytutgugj",
        answer: 3
    },
    
    {
        question: "What tag do I use to write a footer in HTML?",
        option1:"A.asd hhkf",
        option2:"B.fghfhhj kjhk ",
        option3:"C.ytuy78 o;lp",
        option4:"D.ytutgug ikjo j",
        answer: 1
    },

    {
        question: "What tag do I use to add an image in HTML?",
        option1:"A.asd hhkf 7686",
        option2:"B.fghfhhj kjhk 78uh ",
        option3:"C.ytuy78 o;l  uhyhgui",
        option4:"D.ytutgug ikjo gh hjj",
        answer: 1
    },

    {
        question: "What tag do I use to add a link in HTML?",
        option1:"A.asd hhk yhf",
        option2:"B.fghfhhj kjh jhn k ",
        option3:"C.ytuy78 o;l iojh lp",
        option4:"D.ytutgug ikjo u hjki uhij",
        answer: 2
    },

]

if(window.highscores == undefined)
{
    window.highscores = [];
}

var score = 0;
var timer = document.getElementById("time");
var startButton = document.getElementById("start");
var endScreen = document.getElementById("end-screen");
var displayQuestion = document.getElementById("questions");
var hideMenu = document.getElementById("start-screen");
var questionNumberDisplay = document.getElementById("question-number");
var questionTitle = document.getElementById("question-title");
var option1 = document.getElementById("choice1");
var option2 = document.getElementById("choice2");
var option3 = document.getElementById("choice3");
var option4 = document.getElementById("choice4");
var finalScore = document.getElementById("final-score");
var submit = document.getElementById("submit");
var initials = document.getElementById("initials");
var questionNumber = 0

if (document.querySelector("#start") === true) {
for(var i=0; i < questions.lenght; i++) {
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++; 
    } else {
        timer--;
    }
}
}

function showQuestion() {    
    displayQuestion.style.display = "block";
    hideMenu.style.display = "none";
    questionNumberDisplay.innerText = "Question "+(questionNumber+1);

    questionTitle.innerText = questions[questionNumber].question;    
    
    option1.innerText = questions[questionNumber].option1;
    option2.innerText = questions[questionNumber].option2;
    option3.innerText = questions[questionNumber].option3;
    option4.innerText = questions[questionNumber].option4;
}



function showNextQuestion(optionNumber) {

    if (questionNumber+1 > questions.length)
    {
        return;
    }

    if (optionNumber == questions[questionNumber].answer)
    {
        score++;
    }   
    else {
        seconds -= 10
    }

    //console.log(questionNumber," == ",questions[3]);
    
    if (questionNumber+1 == questions.length)
    {
        setAlert();
        return;
    }

    //console.log("Question number is "+questionNumber);

    questionNumber++; // 0 will become 1, 1 will become 2,


    
    

//    console.log("option "+optionNumber+" was clicked");

    questionNumberDisplay.innerText = "Question "+(questionNumber+1);
    questionTitle.innerText = questions[questionNumber].question;
    
    option1.innerText = questions[questionNumber].option1;
    option2.innerText = questions[questionNumber].option2;
    option3.innerText = questions[questionNumber].option3;
    option4.innerText = questions[questionNumber].option4;

}

option1.addEventListener("click", function() {
    showNextQuestion(1);
})


option2.addEventListener("click", function() {
    showNextQuestion(2);
})



option3.addEventListener("click", function() {
    showNextQuestion(3);
})


option4.addEventListener("click", function() {
    showNextQuestion(4);
})

var timeTickerInterval;
document.querySelector("#start").addEventListener("click", function() {
    //setTimeout(setAlert, 120000);
    timeTickerInterval = setInterval(timeTicker,1000);
    showQuestion();
})

function setAlert() {
  //alert("Time is up!");
    endScreen.style.display = "block";
    displayQuestion.style.display = "none";
    finalScore.innerText = score;
}     
var seconds = 60*2;
var timeTicker = function() {
    //console.log("time left is "+seconds);
    timer.innerText = seconds;
    seconds--;
    if(seconds < 0)
    {
        clearInterval(timeTickerInterval);
        setAlert();
    }
}


submit.addEventListener("click", function() {
    var student = {
        name:initials.value,
        score:score
    }
    highscores.push(student);
    console.log(window.highscores);
    window.location = "highscores.html";
    
})