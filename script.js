




const playerSelection = 'Rock';
let computerSelection = getComputerChoice();





function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randNum = getRandomInt(3);
    switch (randNum) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;

        case 2:
            return 'Scissors';
            break;
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Player and Computer Tie";
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return 'Player Loses';
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'Player Wins';
    }

}


function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let index = 0; index < 5; index++) {
        let playerResponse = prompt("Write Paper, Scissors, or Rock");
        let winLoseDraw = playRound(playerResponse, getComputerChoice());
        switch (winLoseDraw) {
            case 'Player and Computer Tie':
                console.log('Tie');
                break;
            case 'Player Loses':
                console.log('Player Loses');
                computerWins++;
                break;
            case 'Player Wins':
                console.log('Player Wins');
                playerWins++;
                break;
            default:
                break;
        }

    }
    if (playerWins > computerWins) {
        console.log('Player Wins Game');
    } else if (playerWins < computerWins) {
        console.log('Player Loses Game');
    } else {
        console.log('Draw');
    }
}

game();