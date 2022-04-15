var highscoreDetails = document.getElementById("highscores");

var highscores = JSON.parse(localStorage.getItem("highscores"));

var displayText = "";
for(let index in highscores) 
{
    displayText += "<li>"+highscores[index].name+":"+highscores[index].score+"</li>";

    console.log(displayText);
}

highscoreDetails.innerHTML = displayText;

document.querySelector("#clear").addEventListener("click", function(){
    localStorage.setItem("highscores","[]");
    window.location.reload();
});
