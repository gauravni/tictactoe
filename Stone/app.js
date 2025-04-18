let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPara = document.querySelector("#user");
const compPara = document.querySelector("#comp");


//Generate computer choice
const genCompChoice = () => {
    let choiceOption = ["rock", "paper", "scissor"];
    //Math.floor used for removing of decimal value and Math.random for geting random value
    const randomIdx = Math.floor(Math.random() * 3);
    return choiceOption[randomIdx];//.toLowerCase(); also can do
};

const drawGame = () => {
   // console.log("Game Draw");
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userPara.innerText = userScore;
       // console.log("You Win!");
        msg.innerText = `${userChoice} -You Win!, Computer Generat's ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compPara.innerText = compScore;
       // console.log("you Lose!");
        msg.innerText = `${userChoice} -You Lose!, Computer Generate's ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
};

//Generate user choice
const playGame = (userChoice) => {
   // console.log("User Choice = ", userChoice);
    const compChoice = genCompChoice();
   // console.log("Computer Choice = ", compChoice);

    if (userChoice === compChoice) { //.toLowerCase() add in userChoice 
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper,scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "Paper") {
            //rock,scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});