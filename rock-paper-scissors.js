// document.getElementById('results').textContent='test2';

// Add event listeners to buttons
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () =>  playRound('scissors'));

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

// function getHumanChoice() {
//   let choice = 0;

//   // check if choice is 1 to 3 and keep asking if not
//   while (true) {
//     choice = Number(prompt('What do you choose? 1: rock, 2: paper, 3: scissors'));
//     document.getElementById('results').textContent=Number.isInteger(choice)
//     if (Number.isInteger(choice) && choice <= 3 && choice >= 1) {
//       // document.getElementById('results').textContent='break hit';
//       break;
//     }  
//   }

//   let choices = ['rock', 'paper', 'scissors'];
//   return choices[choice - 1];
// }

function playRound(humanChoice) {
  let humanScore = 0;
  let computerScore = 0;
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