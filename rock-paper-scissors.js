// document.getElementById('results').textContent='test2';

// Add event listeners to buttons
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () =>  playRound('scissors'));
let humanScore = 0;
let computerScore = 0;


function randomInt(min, max) {
  // convert non-ints to ints
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  return choices[randomInt(0, 2)];
}

function updateScore() {
  let humanScoreP = document.getElementById('humanScore');
  let computerScoreP = document.getElementById('computerScore');
  humanScoreP.textContent = humanScore;
  computerScoreP.textContent = computerScore;

}

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    document.getElementById('results').textContent=`It's a tie, both did ${computerChoice}.`;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    document.getElementById('results').textContent='Computer won: Paper beats Rock';
    computerScore++;
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    document.getElementById('results').textContent='Human won: Rock beats Scissors';
    humanScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    document.getElementById('results').textContent='Human won: Paper beats Rock';
    humanScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    document.getElementById('results').textContent='Computer won: Scissors beat Paper';
    computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    document.getElementById('results').textContent='Computer won: Rock beats Scissors';
    computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    document.getElementById('results').textContent='Human won: Scissors beat Paper';
    humanScore++;
  }
  updateScore();
  // updateScore(humanScore, computerScore);
}

// function playRounds(numberOfRounds) {
//   for (let i = 0; i < numberOfRounds; i++) {
//     playRound();
//     document.getElementById('results').textContent="Done)
//   }
// }

// playRounds(2);

// document.getElementById('results').textContent=computerChoice();
// document.getElementById('results').textContent=computerChoice();
// document.getElementById('results').textContent=computerChoice();
// document.getElementById('results').textContent=computerChoice();