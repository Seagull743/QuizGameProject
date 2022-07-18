document.getElementById("retry").onclick = function () {
    location.href = "game.html"
    startGame();
}

document.getElementById("menu").onclick = function () {
    location.href = "index.html"
}



let phrase = document.getElementById("phrase");
let scoreText2 = document.getElementById("score");
let score = localStorage.getItem("Score");
let totalquestions = localStorage.getItem("TotalQuestions");



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




