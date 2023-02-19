
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
            alert("Computer Choice out of Bounds");
            break;
    }
    return choice;
}
//Player input

const inputButtons = document.querySelectorAll(".game button");

inputButtons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(getComputerChoice(), button.id);
    });
});


function playRound(computerSelection, playerSelection) {
    
    let state;

    if(playerSelection == computerSelection) {
        state = "Draw";
    } else {
        switch (playerSelection) {
            case "Rock":
                switch (computerSelection) {
                    case "Paper":
                        state = "You Lose!";
                        break;
                    case "Scissors":
                        state = "You Win!";
                        break;    
                    default:
                        break;
                }
                break;
    
            case "Scissors": 
                switch (computerSelection) {
                    case "Rock":
                        state = "You Lose!";
                        break;
                    case "Paper":
                        state = "You Win!";
                        break;    
                    default:
                        break;
                }
                break;
            
            case "Paper":
                switch (computerSelection) {
                    case "Scissors":
                        state = "You Lose!";
                        break;
                    case "Rock":
                        state = "You Win!";
                        break;    
                    default:
                        break;
                }    
            default:
                break;
        }
    }    
    
}
