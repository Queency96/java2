// Nigeria Presidents and their ages
const presidents = [
  { name: 'Nnamdi Azikiwe', age: 117 },
  { name: 'Olusegun Obasanjo', age: 85 },
  { name: 'Shehu Shagari', age: 97 },
  { name: 'Ibrahim Babangida', age: 81 },
  { name: 'Ernest Shonekan', age: 84 },
  { name: 'Sani Abacha', age: 78 },
  { name: 'Abdulsalami Abubakar', age: 80 },
  { name: "Umaru Musa Yar'Adua", age: 70 },
  { name: 'Goodluck Jonathan', age: 65 },
  { name: 'Muhammadu Buhari', age: 81 },
  { name: 'Yemi Osinbajo', age: 65 },
];

// Function to start the quiz
function startQuiz() {
  // Collecting user's data before the game starts
  const userName = prompt('Enter your username:');
  const cohortNumber = prompt('Enter your cohort number:');
  const passcode = parseInt(prompt('Enter your passcode:'));

  // Check passcode
  if (passcode == NaN) {
    alert('Incorrect passcode. Quiz cannot be started.');
    return;
  }

  // Setting initial score to zero & failed question(s) to empty array
  let score = 0;
  const failedQuestions = [];

  // Ask questions
  presidents.forEach((president) => {
    // Prompting for user input as storing it to Guess variable
    const guess = parseInt(prompt(`How old is ${president.name}?`));

    // Checking if the input is number and the number is equal the president age
    if (!isNaN(guess) && guess === president.age) {
      // Scored 10% if the input and the age tallied
      score += 10;
    } else {
      // Pushing the failed questions  and corresponding answers inside failed questions array
      failedQuestions.push(`${president.name} is ${president.age} years old.`);
    }
  });
  // Display results
  alert(
    `Quiz completed!\n\n${userName}, your score is: ${score}%\n\nCorrect answers:\n\n${failedQuestions.join(
      '\n'
    )}`
  );
}

// Start the quiz
startQuiz();
