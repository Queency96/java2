const button = document.getElementById('button');
button.addEventListener('click', guessNumberGame);

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Main game function
function guessNumberGame() {
  // Generate a random number between 20 and 40
  const randomNumber = getRandomNumber(20, 40);
  console.log(randomNumber);

  // Prompt user to guess the number
  let guess = prompt(
    "I'm thinking of a number between 20 and 40. Can you guess what it is?"
  );

  // Keep prompting the user until they guess the correct number
  while (true) {
    // Check if the input is a valid number
    if (isNaN(guess)) {
      guess = prompt('Please enter a valid number between 20 and 40.');
      continue;
    }

    // Convert the input to a number
    guess = parseInt(guess);

    // Check if the guess is correct
    if (guess === randomNumber) {
      document.getElementById('result').innerText = "You're a lucky winner!";
      break;
    } else {
      guess = prompt('Wrong guess! Try again:');
    }
  }
}
