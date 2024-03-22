// Nigeria Presidents and their ages (as of March 2024)
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
  const userName = prompt('Enter your username:');
  const cohortNumber = prompt('Enter your cohort number:');
  const passcode = parseInt(prompt('Enter your passcode:'));

  // Check passcode
  if (passcode == NaN) {
    alert('Incorrect passcode. Quiz cannot be started.');
    return;
  }

  let score = 0;
  const failedQuestions = [];

  // Ask questions
  presidents.forEach((president) => {
    const guess = parseInt(prompt(`How old is ${president.name}?`));

    if (!isNaN(guess) && guess === president.age) {
      score += 10;
    } else {
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
