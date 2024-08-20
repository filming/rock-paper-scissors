document.addEventListener("DOMContentLoaded", event => {
    // create a zooming in effect when you hover over a player choice 
    const playerOptions = document.querySelector(".options").querySelectorAll("img");

    for (let i = 0; i < playerOptions.length; i++){
        
        playerOptions[i].addEventListener("mouseenter", mouseenterEvent => {
            // make sure the button hasn't been interacted with while its been disabled (due to the game being over)
            if (!playerOptions[i].disabled){

                for (let j = 0; j < playerOptions.length; j++){
                    if (i !== j){
                        playerOptions[j].style.opacity = "33%";
                    } else {
                        playerOptions[j].style.width = "275px";
                    }
                }
            }
        });

        playerOptions[i].addEventListener("mouseleave", mouseenterEvent => {
            if (!playerOptions[i].disabled){

                for (let j = 0; j < playerOptions.length; j++){
                    if (i !== j){
                        playerOptions[j].style.opacity = "100%";
                    } else {
                        playerOptions[j].style.width = "250px";
                    }
                }
            }
        });

        playerOptions[i].disabled = false;
    }
});

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

function getRoundWinner(humanChoice, computerChoice){
    let roundWinner = "";
        
    if (humanChoice === computerChoice){
        roundWinner = "draw";
    }
    else if (humanChoice === "rock"){
        if (computerChoice === "scissors"){
            roundWinner = "human";
        }
        else {
            roundWinner = "computer";
        }
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            roundWinner = "human";
        } 
        else {
            roundWinner = "computer";
        }
    }
    else {
        if (computerChoice === "paper"){
            roundWinner = "human";
        }
        else {
            roundWinner = "computer";
        }
    }

    return roundWinner;
}

function getGameStatus(humanScore, computerScore){
    let gameStatus = "none"

    if (humanScore === 5){
        gameStatus = "human";
    }
    else if (computerScore === 5){
        gameStatus = "computer";
    }

    return gameStatus;
}

function togglePlayerOptions(){
    const playerOptions = document.querySelector(".options").querySelectorAll("img");

    for (let i = 0; i < playerOptions.length; i++){
        if (playerOptions[i].disabled === false){
            playerOptions[i].disabled = true;
            playerOptions[i].style.opacity = "33%";
        }
        else if (playerOptions[i].disabled === true) {
            playerOptions[i].disabled = false;
            playerOptions[i].style.opacity = "100%";
        }
        playerOptions[i].style.width = "250px";
    }
}

function showRestartButton(){
    const restartBtn = document.querySelector(".restart__content button");
    restartBtn.hidden = false;
}

function gameOver(){
    togglePlayerOptions();
    showRestartButton();
}

function playGame(){
    let humanScore = 0, computerScore = 0;

    const humanScoreLabel = document.querySelector(".scores__human .scores__score");
    const computerScoreLabel = document.querySelector(".scores__computer .scores__score");

    const roundResultLabel = document.querySelector(".results__round");
    const gameResultLabel = document.querySelector(".results__game");
    
    function playRound(humanChoice, computerChoice){

        // determine, display and update the points of the round winner
        const roundWinner = getRoundWinner(humanChoice, computerChoice);
        
        switch (roundWinner){
            case "draw":
                roundResultLabel.textContent = `This round ends in a draw! You both chose ${computerChoice}.`;
                roundResultLabel.style.color = "#d0a42f"; // gold
                break;

            case "human":
                roundResultLabel.textContent = `You win this round! The computer chose ${computerChoice}.`;
                roundResultLabel.style.color = "#44bb49"; // green
                humanScore++;
                break;
                
            case "computer":
                roundResultLabel.textContent = `You lose this round! The computer chose ${computerChoice}.`;
                roundResultLabel.style.color = "#ff0500"; // red
                computerScore++;
                break;
        }

        humanScoreLabel.textContent = humanScore;
        computerScoreLabel.textContent = computerScore;

        // determine and display the current game status
        const gameStatus = getGameStatus(humanScore, computerScore);

        switch (gameStatus){
            case "human":
                gameResultLabel.textContent = "You have reached 5 points, you win the game!";
                gameResultLabel.style.color = "#44bb49"; // green
                gameOver();
                break;

            case "computer":
                gameResultLabel.textContent = "The computer has reached 5 points, you lose the game!";
                gameResultLabel.style.color = "#ff0500"; // red
                gameOver();
                break;
        }
    }

    // play a round when the user clicks on a player choice
    const playerOptions = document.querySelector(".options").querySelectorAll("img");

    for (let i = 0; i < playerOptions.length; i++){
        playerOptions[i].addEventListener("click", clickEvent => {
            if (!playerOptions[i].disabled){
                
                const computerSelection = getComputerChoice();
                playRound(clickEvent.target.id, computerSelection);
            }
        });
    }

    // set the game back to initial state
    const restartBtn = document.querySelector(".restart__content button");
    restartBtn.addEventListener("click", clickEvent => {
        togglePlayerOptions();
        restartBtn.hidden = true;

        humanScore = 0;
        computerScore = 0;

        humanScoreLabel.textContent = "0";
        computerScoreLabel.textContent = "0";
        roundResultLabel.textContent = "";
        gameResultLabel.textContent = "";
    });
}

playGame();
