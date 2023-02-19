
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
const score = [0,0]

inputButtons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(getComputerChoice(), button.id,score);
    });
});


function playRound(computerSelection, playerSelection,score) {
    
    let state;

    const playerOut = document.querySelector("#player");
    const computerOut = document.querySelector("#computer");

    const mainGame = document.querySelector(".game");
    const output = document.querySelector(".status");

    if(playerSelection == computerSelection) {
        state = "Draw";
    } else {
        switch (playerSelection) {
            case "Rock":
                switch (computerSelection) {
                    case "Paper":
                        state = "You Lose!";
                        score[0]++;
                        computerOut.textContent = `Com: ${score[0]}`;
                        break;
                    case "Scissors":
                        state = "You Win!";
                        score[1]++;
                        playerOut.textContent = `You: ${score[1]}`;
                        break;    
                    default:
                        break;
                }
                break;
    
            case "Scissors": 
                switch (computerSelection) {
                    case "Rock":
                        state = "You Lose!";
                        score[0]++;
                        computerOut.textContent = `Com: ${score[0]}`;
                        break;
                    case "Paper":
                        state = "You Win!";
                        score[1]++;
                        playerOut.textContent = `You: ${score[1]}`;
                        break;    
                    default:
                        break;
                }
                break;
            
            case "Paper":
                switch (computerSelection) {
                    case "Scissors":
                        state = "You Lose!";
                        score[0]++;
                        computerOut.textContent = `Com: ${score[0]}`;
                        break;
                    case "Rock":
                        state = "You Win!";
                        score[1]++;
                        playerOut.textContent = `You: ${score[1]}`;
                        break;    
                    default:
                        break;
                }    
            default:
                break;
        }
    }
    if(score[0] == 5) {
        output.textContent = "You Lost the Game";
    } else if(score[1] == 5) {
        output.textContent = "You Won the Game";
    } else {
        output.textContent = `${state}`;
    }    
}
