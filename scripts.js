//Questions
let questions = [
    {
        "id": 1,
        "question": "What does 1+1 equal?",
        "1": 2,
        "2": 5,
        "3": 3,
        "4": 1,
        "answer": "1"
    },
    {
        "id": 2,
        "question": "What does 2+2 equal?",
        "1": 3,
        "2": 5,
        "3": 4,
        "4": 8,
        "answer": "3"
    },
    {
        "id": 3,
        "question": "What does 3+3 equal?",
        "1": 7,
        "2": 5,
        "3": 6,
        "4": 9,
        "answer": "3"
    },
    {
        "id": 4,
        "question": "What does 4+4 equal?",
        "1": 8,
        "2": 5,
        "3": 9,
        "4": 7,
        "answer": "1"
    },
    {
        "id": 5,
        "question": "What does 5+5 equal?",
        "1": 9,
        "2": 12,
        "3": 11,
        "4": 10,
        "answer": "4"
    }
];
 
let difficultquestions = [
    {
        "id": 1,
        "question": "What does 9*7 equal?",
        "1": 63,
        "2": 72,
        "3": 54,
        "4": 68,
        "answer": "1"
    },
    {
        "id": 2,
        "question": "What does 8*7 equal?",
        "1": 72,
        "2": 63,
        "3": 56,
        "4": 92,
        "answer": "3"
    },
    {
        "id": 3,
        "question": "What does 9*12 equal?",
        "1": 98,
        "2": 93,
        "3": 108,
        "4": 102,
        "answer": "3"
    },
    {
        "id": 4,
        "question": "What does 8*8?",
        "1": 64,
        "2": 72,
        "3": 63,
        "4": 92,
        "answer": "1"
    },
    {
        "id": 5,
        "question": "What does 7*12 equal?",
        "1": 112,
        "2": 93,
        "3": 102,
        "4": 84,
        "answer": "4"
    }
];
 
//Html elements
const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const questionCounterText = document.getElementById("counter");
const scoreText = document.getElementById("score");
 
//variables that get reset when game restarts
let questionCounter = 0;

const MAX_QUESTIONS = 3;
let answerAvailable = true;
let choseHarderQuestion = false;
 



const startGame = () => {
    questionCounter = 0;
    score = 0;
    (!choseHarderQuestion) ? quizquestions = GetRandomQuestions(questions, MAX_QUESTIONS) : quizquestions = GetRandomQuestions(difficultquestions, MAX_QUESTIONS);
    getNewQuestion();
};
 
 
// for getting random questions in an array https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
const GetRandomQuestions = (arr, n) => {
    let len = arr.length;
    if (n > len) {
        throw new LenError (
            "The number of questions is greater than the array"
        );
    }
 
    const randomQuestions = [...arr].sort(() => 0.5 - Math.random());
    return (selected = randomQuestions.slice(0, n));  
};
 
 
//Checks if there is a question to ask and if there is call it then minus the length by one
const getNewQuestion = () => {
 
    //checks if the quiz question length is equal to 0
    // allows me to bring the score variable over to another file https://stackoverflow.com/questions/27765666/passing-variable-through-javascript-from-one-html-page-to-another-page

    if(quizquestions.length === 0){
        answerAvailable = false;
        setTimeout(() => { 
            localStorage.setItem("Score", score);
            localStorage.setItem("TotalQuestions", MAX_QUESTIONS);
            window.location.replace("endgame.html");
          }, "2000")
          return
        }
        // increases the question count by 1
        questionCounter ++;
        //changes the questioncount html text to question counter by max questions
        questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
   
        //picks the first question out of the quiz questions
        let currentQuestion = quizquestions[0];
 
        //sets the html question text to the current question
        question.innerText = currentQuestion.question;
       
        //sets the question answers to all html answer-text
        answers.forEach((answer) => {
            answer.innerText = currentQuestion[answer.dataset.answer];
        });  
        //adds event listeners to all answers
        answers.forEach((answer) => {
            answer.addEventListener('click', (e) => {    
               
                if(!answerAvailable) {
                    console.log("already picked answer");
                    return;    
                }
                answerAvailable = false;
                let clickedAnswer = e.target;
                let answerLetter = clickedAnswer.dataset.answer
               
 
 
                // adding class to parent element https://bobbyhadz.com/blog/javascript-add-class-to-parent-element
                if(answerLetter == currentQuestion.answer){
                    score++;
                    scoreText.innerText = score;
                    clickedAnswer.parentElement.classList.add("correct");
                }
                else{
                    clickedAnswer.parentElement.classList.add("incorrect");
                }
                console.log(answerAvailable)
            setTimeout(() => {
                clickedAnswer.parentElement.classList.remove("incorrect");
                clickedAnswer.parentElement.classList.remove("correct");
                quizquestions.shift();
                getNewQuestion();
                answerAvailable = true;    
            },1000);
            });
        });  
  };
 
  startGame();
