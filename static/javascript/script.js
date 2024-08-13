function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber){
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice (Rock, Paper, Scissors): ").toLowerCase().trim();

    switch (humanChoice){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            return "";
    }
}


function playGame(){
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice){
        let gameWinner = "";
    
        if (humanChoice === computerChoice){
            gameWinner = "draw";
        }
        else if (humanChoice === "rock"){
            if (computerChoice === "scissors"){
                gameWinner = "human";
            }
            else {
                gameWinner = "computer";
            }
        }
        else if (humanChoice === "paper"){
            if (computerChoice === "rock"){
                gameWinner = "human";
            } 
            else {
                gameWinner = "computer";
            }
        }
        else {
            if (computerChoice === "paper"){
                gameWinner = "human";
            }
            else {
                gameWinner = "computer";
            }
        }
    
        if (gameWinner === "draw"){
            console.log("It's a draw!");
        } 
        else if (gameWinner === "human"){
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}

playGame();
