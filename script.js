let computerSelection = getComputerChoice();
let playerWins = 0;
let computerWins = 0;
let buttons = document.querySelectorAll('.selectors');

function whenPressed(e) {
    console.log(e);
    game(e.id);
}

buttons.forEach((button) => {
    button.addEventListener('click', whenPressed(e))
});


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randNum = getRandomInt(3);
    switch (randNum) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;

        case 2:
            return 'scissors';
            break;
        default:
            break;
    }
}

function playRound(computerSelection, playerSelection) {
    switch (computerSelection) {
        case "rock":
            if (playerSelection == "rock") {
                console.log("You tie!");
                return "You tie!";
            } else if (playerSelection == "paper") {
                console.log("You win!");
                return "You win!";
            } else if (playerSelection == "scissors") {
                console.log("You lose!");
                return "You lose!";
            } else {
                console.log("invalid user entry!")
                return "You fucked up!"
            }
        case "paper":
            if (playerSelection == "rock") {
                console.log("You lose!");
                return "You lose!";
            } else if (playerSelection == "paper") {
                console.log("You tie!");
                return "You tie!";
            } else if (playerSelection == "scissors") {
                console.log("You win!");
                return "You win!";
            } else {
                console.log("invalid user entry!")
                return "You fucked up!"
            }
        case "scissors":
            if (playerSelection == "rock") {
                console.log("You win!");
                return "You win!";
            } else if (playerSelection == "paper") {
                console.log("You lose!");
                return "You lose!";
            } else if (playerSelection == "scissors") {
                console.log("You tie!");
                return "You tie!";
            } else {
                console.log("invalid user entry!")
                return "You fucked up!"
            }
        default:
            console.log("invalid user entry!")
            return "You fucked up!"
    }

}



function game(playerButtonSelection) {

    let winOrLose = playRound(computerSelection, playerButtonSelection);

    console.log(winOrLose);
}
