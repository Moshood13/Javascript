let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("quest-container");
let nextButton = document.getElementById("next")
let countOfQuest = document.querySelector(".num-of-quest");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start");
let questCount;
let scoreCount = 0;
let timeCount = 11;
let countdown;

const quizArray = [
{ id: "0", question:"What country has the highest life expectancy?", option:["Nigeria","Germany", "Hong Kong","USA"], correct:"Hong Kong"},
{ id: "1", question:"Which language has the more native speakers:", option:["Spanish", "English","Arabic","Chinese"], correct:"Spanish"},
{ id: "2", question:"What is the most common surname in the United States?", option:["Smith","Williams","Johnson","Brown"], correct:"Smith"},
{ id: "3", question:"What disease commonly spread on pirate ships?", option:["Covid-19", "Cholera", "Scurvy", "Malaria"], correct:"Scurvy"},
{ id: "4", question:"Who was the Ancient Greek God of the Sun?", option:["Zeus", "Poseidon","Hades","Apollo"], correct:"Apollo"},
{ id: "5", question:"What year was the United Nations established?", option:["1901","1965","1945","1940"], correct:"1945"},
{ id: "6", question:"How many minutes are in a full week?", option:["11500", "24230","10080", "9650"], correct:"10080"},
{ id: "7", question:"What car manufacturer had the highest revenue in 2020?", option:["Toyota", "Mercedes-Benz", "Honda", "Volkswagen"], correct:"Volkswagen"},
{ id: "8", question:"What company was originally called 'Cadabra'?", option:["Facebook", "Google","Amazon","Olx"], correct:"Amazon"},
{ id: "9", question:"What country drinks the most coffee per capita?", option:["Finland", "Nigeria", "Scotland", "Ghana"], correct:"Finland"}
];

restart.addEventListener(("click"), () => {
    initialSetup();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextButton.addEventListener("click", displayNext = () => {
    questCount += 1;

    if (questCount == quizArray.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Your total score is" + " " + scoreCount + " " + "out of " + " " + questCount;

    } else {
        countOfQuest.innerHTML = questCount + 1 + " of " + quizArray.length + " " + "Question";

        quizDisplay(questCount);
        timeCount = 11;
        clearInterval(countdown);
        timeDisplay();
    }
})
const timeDisplay = () => {
    countdown = setInterval(() => {
        timeCount--;
        timeLeft.innerHTML = `${timeCount}s`;
        if (timeCount == 0){
            clearInterval(countdown);
            displayNext();
        }

    }, 1000);
};
const quizDisplay = (questCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach ((card) => {
        card.classList.add("hide");
    });
    quizCards[questCount].classList.remove("hide")
}
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide")
}


// get quiz questions
function getQuizQuestion() {
   quizArray.sort(() => Math.random() - 0.5);

     for (let i of quizArray) {
        i.option.sort(() => Math.random() - 0.5);

        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        countOfQuest.innerHTML = 1 +" " + "of" + " " + quizArray.length + " " + "Question";
        
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question")
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
       div.innerHTML += `
       <button class="option-div" onclick="checker(this)">${i.option[0]}</button>
       <button class="option-div" onclick="checker(this)">${i.option[1]}</button>
       <button class="option-div" onclick="checker(this)">${i.option[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.option[3]}</button>
       `
       quizContainer.appendChild(div);
     }
}

// create a checker function for options
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questCount];
    let option = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        option.forEach((element) => {
            if (element.innerText === quizArray[questCount].correct) {
                element.classList.add("correct");
            };
        });
    }
    clearInterval(countdown);

    option.forEach((element) => {
        element.disabled = true;
    });
}


function initialSetup() {
    quizContainer.innerHTML = "";
    questCount = 0;
    scoreCount = 0;
    timeCount = 11;
    getQuizQuestion();
    quizDisplay(questCount);
    clearInterval(countdown);
    timeDisplay();
}
startButton.addEventListener("click", () => {
    startButton.classList.add("hide");
    displayContainer.classList.remove("hide");
    initialSetup();
})