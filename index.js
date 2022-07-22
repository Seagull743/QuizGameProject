
let choseHarderQuestion = false;
let buttons = document.getElementsByClassName("buttons");

for (let button of buttons) {
    button.addEventListener("click", function onclick() {
        (button.dataset.mode == "difficult") ? choseHarderQuestion = true : choseHarderQuestion = false; 
        setTimeout(() => { 
            localStorage.setItem("modequestions", choseHarderQuestion);
            window.location.replace("game.html");
            startGame();
          }, "1000")
    });
}


console.log("Loaded Index");