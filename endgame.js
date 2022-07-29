// document.getElementById("retry").onclick = function () {
//     location.href = "game.html"
//     startGame();
// }

// document.getElementById("menu").onclick = function () {
//     location.href = "index.html"
//     window.location.replace("endgame.html");
// }



let phrase = document.getElementById("phrase");
let scoreText2 = document.getElementById("score");
let score = localStorage.getItem("Score");
let totalquestions = localStorage.getItem("TotalQuestions");
let buttons = document.getElementsByClassName("buttons"); 


if(score == 3){
    phrase.innerText = "Well Done!"
    scoreText2.innerText = `${score}/${totalquestions}`;
}
else if(score == 2){
    phrase.innerText = "So close!"
    scoreText2.innerText = `${score}/${totalquestions}`;
}
else {
    phrase.innerText = "Better luck next time!"
    scoreText2.innerText = `${score}/${totalquestions}`;
}


for (let button of buttons) {
    button.addEventListener("click", function onclick() {
        if(button.dataset.mode == "difficult"){
            choseHarderQuestion = true;
            localStorage.setItem("modequestions", choseHarderQuestion);
            window.location.replace("game.html");
        }
        else if (button.dataset.mode == "menu") {
            window.location.replace("index.html");
        }
        else {
            choseHarderQuestion = false;
            localStorage.setItem("modequestions", choseHarderQuestion);
            window.location.replace("game.html");
        }
        /*
        (button.dataset.mode == "difficult") ? choseHarderQuestion = false : choseHarderQuestion = true; 
        */
        setTimeout(() => { 
            window.location.replace("game.html");
          }, "1000")
    });
} 



