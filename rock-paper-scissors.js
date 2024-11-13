// console.log('test2');

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

function getHumanChoice() {
  let choice = 0;

  // check if choice is 1 to 3 and keep asking if not
  while (true) {
    choice = Number(prompt('What do you choose? 1: rock, 2: paper, 3: scissors'));
    console.log(Number.isInteger(choice))
    if (Number.isInteger(choice) && choice <= 3 && choice >= 1) {
      // console.log('break hit');
      break;
    }  
  }

  let choices = ['rock', 'paper', 'scissors'];
  return choices[choice - 1];
}

function play() {
  let humanScore = 0;
  let computerScore = 0;
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log('Computer won: Paper beats Rock');
    computerScore++;
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log('Human won: Rock beats Scissors');
    humanScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log('Human won: Paper beats Rock');
    humanScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log('Computer won: Scissors beat Paper');
    computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log('Computer won: Rock beats Scissors');
    computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log('Human won: Scissors beat Paper');
    humanScore++;
  }
}

play();

// console.log(computerChoice());
// console.log(computerChoice());
// console.log(computerChoice());
// console.log(computerChoice());