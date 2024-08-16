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

function playGame(){
    let humanScore = 0, computerScore = 0;

    const humanScoreDisplay = document.querySelector(".scores__human");
    const computerScoreDisplay = document.querySelector(".scores__computer");
    const resultsRound = document.querySelector(".results__round");
    const resultsGame = document.querySelector(".results__game");

    function playRound(humanChoice, computerChoice){
        let gameWinner = "";
        
        // determine round winner
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
        
        // check the round status & update the display
        if (gameWinner === "draw"){
            resultsRound.textContent = "This round ends in a draw!";
        } 
        else if (gameWinner === "human"){
            resultsRound.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        }
        else {
            resultsRound.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }

        humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

        if (humanScore === 5){
            resultsGame.textContent = "You have reached 5 points, you win the game!";
        }
        else if (computerScore === 5){
            resultsGame.textContent = "The computer has reached 5 points, you lose the game!";
        }
    }

    const rockBtn = document.querySelector(".player-options__rock-btn");
    rockBtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound("rock", computerSelection);
    });

    const paperBtn = document.querySelector(".player-options__paper-btn");
    paperBtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound("paper", computerSelection);
    });
    
    const scissorsBtn = document.querySelector(".player-options__scissors-btn");
    scissorsBtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound("scissors", computerSelection);
    });
}

playGame();
