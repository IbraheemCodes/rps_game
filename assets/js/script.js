let myScoreNum = 0;
let botScoreNum = 0;

// Function to get computer's choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;

}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    const winnerDisplay = document.getElementById("winner-display");

    // If it's a draw
    if (playerChoice === computerChoice) {
        return winnerDisplay.textContent = "Draw";
    }

    // If player chose rock
    if (playerChoice === 1) {
        if (computerChoice === 2) {
            botScoreNum++;
            return winnerDisplay.textContent = "Bot";
        }

        if (computerChoice === 3) {
            myScoreNum++;
            return winnerDisplay.textContent = "You";
        }
    }

    // If player chose paper
    if (playerChoice === 2) {
        if (computerChoice === 1) {
            myScoreNum++;
            return winnerDisplay.textContent = "You";
        }

        if (computerChoice === 3) {
            botScoreNum++;
            return winnerDisplay.textContent = "Bot";
        }
    }

    // If player chose scissor
    if (playerChoice === 3) {
        if (computerChoice === 1) {
            botScoreNum++;
            return winnerDisplay.textContent = "Bot";
        }

        if (computerChoice === 2) {
            myScoreNum++;
            return winnerDisplay.textContent = "You";
        }
    }
}

// Function to update the UI
function updateUI(playerChoice, computerChoice) {
    const id1 = document.getElementById("1");
    const id2 = document.getElementById("2");
    const id3 = document.getElementById("3");
    const id4 = document.getElementById("4");
    const id5 = document.getElementById("5");
    const id6 = document.getElementById("6");

    const yourScore = document.getElementById("your-score");
    const botScore = document.getElementById("bot-score");

    id1.style.border = "none";
    id2.style.border = "none";
    id3.style.border = "none";
    id4.style.border = "none";
    id5.style.border = "none";
    id6.style.border = "none";

    // Update the HTML or any UI elements to display choices and the winner

    switch (playerChoice) {
        case 1:
            id1.style.border = "2px solid red";
            break;
        case 2:
            id2.style.border = "2px solid red";
            break;
        case 3:
            id3.style.border = "2px solid red";
            break;
    }

    switch (computerChoice) {
        case 1:
            id4.style.border = "2px solid red";
            break;
        case 2:
            id5.style.border = "2px solid red";
            break;
        case 3:
            id6.style.border = "2px solid red";
            break;
    }

    yourScore.textContent = myScoreNum;
    botScore.textContent = botScoreNum;

    setTimeout(() => {
        id1.style.border = "none";
        id2.style.border = "none";
        id3.style.border = "none";
        id4.style.border = "none";
        id5.style.border = "none";
        id6.style.border = "none";
    }, 1000);
}

//  Buttons with IDs 'rock', 'paper', 'scissors' in your HTML
document.getElementById('1').addEventListener('click', function () {
    const playerChoice = 1;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    updateUI(playerChoice, computerChoice, winner);
});

document.getElementById('2').addEventListener('click', function () {
    const playerChoice = 2;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    updateUI(playerChoice, computerChoice, winner);
});

document.getElementById('3').addEventListener('click', function () {
    const playerChoice = 3;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    updateUI(playerChoice, computerChoice, winner);
});