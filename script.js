
function getComputerChoice () {
    let choice = Math.trunc(Math.random() * 3);

    switch (choice) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
        default:
            console.error("Computer Choice out of Bounds");
            break;
    }
    return choice;
}

function playRound(computerSelection, playerSelection) {
    // Clean Player input
    let playerSelectionClean = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    let state;
    let winner;
    let looser;

    if(playerSelectionClean == computerSelection) {
        state = "Draw";
        winner = computerSelection;
        looser = playerSelectionClean;
    } else {
        switch (playerSelectionClean) {
            case "Rock":
                switch (computerSelection) {
                    case "Paper":
                        state = "You Lose!";
                        winner = computerSelection;
                        looser = playerSelection;
                        break;
                    case "Scissors":
                        state = "You Win!";
                        winner = playerSelectionClean;
                        looser = computerSelection;
                        break;    
                    default:
                        break;
                }
                break;
    
            case "Scissors": 
                switch (computerSelection) {
                    case "Rock":
                        state = "You Lose!";
                        winner = computerSelection;
                        looser = playerSelection;
                        break;
                    case "Paper":
                        state = "You Win!";
                        winner = playerSelectionClean;
                        looser = computerSelection;
                        break;    
                    default:
                        break;
                }
                break;
            
            case "Paper":
                switch (computerSelection) {
                    case "Scissors":
                        state = "You Lose!";
                        winner = computerSelection;
                        looser = playerSelection;
                        break;
                    case "Rock":
                        state = "You Win!";
                        winner = playerSelectionClean;
                        looser = computerSelection;
                        break;    
                    default:
                        break;
                }    
            default:
                break;
        }
    }    
    console.log(`${state} ${winner} beats ${looser}`);
    return state;
    
}

function game() {
    let pointsPlayer = 0;
    let pointsComputer = 0;

    for(let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerSelection = prompt("Enter Rock Paper or Scissors:")
        
        let state = playRound(computerChoice,playerSelection);
        switch(state) {
            case "Draw":
                break;
            case "You Win!":
                pointsPlayer++;
                break;
            case "You Lose!":
                pointsComputer++;
                break;
            default:
                console.error("Points Counter")
                break;
        }
        console.log(`Your points: ${pointsPlayer} Points Computer: ${pointsComputer}`);
    }
    if(pointsPlayer > pointsComputer) {
        console.log("You Won the Game!");
    } else {
        console.log("You Lost the Game");
    }
}

game();
