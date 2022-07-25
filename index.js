
let choseHarderQuestion = false;
let buttons = document.getElementsByClassName("buttons");
let difficult = document.getElementById("normal");
let normal = document.getElementById("diff");




/*
difficult.addEventListener("click", function onclick() {
    choseHarderQuestion = true;
    setTimeout(() => { 
        window.location.replace("game.html");
      }, "1000")
});

normal.addEventListener("click", function onclick() {
    choseHarderQuestion = false;
    setTimeout(() => { 
        window.location.replace("game.html");
      }, "1000")
});
localStorage.setItem("modequestions", choseHarderQuestion);
*/


for (let button of buttons) {
    button.addEventListener("click", function onclick() {
        if(button.dataset.mode == "difficult"){
            choseHarderQuestion = true;
            localStorage.setItem("modequestions", choseHarderQuestion);
        }
        else {
            choseHarderQuestion = false;
            localStorage.setItem("modequestions", choseHarderQuestion);
        }
        /*
        (button.dataset.mode == "difficult") ? choseHarderQuestion = false : choseHarderQuestion = true; 
        */
        setTimeout(() => { 
            window.location.replace("game.html");
          }, "1000")
    });
} 