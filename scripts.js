let tally = [0, 0, 0];

function displayResults(results, end = false) {
    const container = document.querySelector('#results');

    const content = document.createElement('h1');
    content.classList.add("text");
    content.textContent = results;

    if( container.children.length > 0 && end == false) {
        container.removeChild(container.childNodes[0]);
    }
    if( container.children.length > 0 && end == false) {
        container.removeChild(container.childNodes[0]);
    }
    
    console.log(container);

    container.appendChild(content);
}

function playRound(playerAnswer) {
    let answerChoice = ['rock', 'paper', 'scissors'];

    while (playerAnswer != "rock" && playerAnswer != "scissors" && playerAnswer != "paper") {
            playerAnswer = prompt("Please enter rock, paper or scissors").toLowerCase();
    }

    let computerAnswer = answerChoice[Math.floor(Math.random() * 2)]; // chooses a random answer from the answerChoice array

    if (playerAnswer == computerAnswer) {
        displayResults("You both chose " + playerAnswer + ". This round is a tie!");
        tally[2]++;
        return "tie";
    } else if ((playerAnswer == "rock" && computerAnswer == "scissors") ||
        (playerAnswer == "scissors" && computerAnswer == "paper") ||
        (playerAnswer == "paper" && computerAnswer == "rock")) {
        displayResults("You chose " + playerAnswer + " and the computer chose " +
            computerAnswer + ". You win!");
        tally[0]++;
        return "win";
    } else {
        displayResults("You chose " + playerAnswer + " and the computer chose " +
            computerAnswer + ". You lose!");
        tally[1]++;
        return "lose";
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    if (tally[0] >= 5) {
        displayResults("You win!", true);
        tally = [0, 0, 0];
    }
    if (tally[1] >= 5) {
        displayResults("The computer wins!", true);
        tally = [0, 0, 0];
    }
    });
});