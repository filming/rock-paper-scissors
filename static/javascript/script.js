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
            return null;
    }
}
