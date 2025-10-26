const questions = [
  {
  prompt: "which of the following data type is immutuable?",
  options: ["boolean", "integer", "string", "all of the above"],
  answer: "all of the above"
  },
  {
    prompt: "What is the result of '5' + 5 in JavaScript?",
    options: ["10", "55", "null", "Error"],
    answer: "55"
  },
  {
    prompt: "Which data type is used to store true or false?",
    options: ["String", "Boolean", "Number", "Object"],
    answer: "Boolean"
  },
  {
    prompt: '"=" is an assignment operator?',
    options: ["true", "false"],
    answer: "true"
  },
  {
    prompt: "what is 'book' + 'book' in JavaScript?",
    options: ["'bookbook'", "'NaN'", "'2book'", "'error'"],
    answer: "'bookbook'"
  }
];

let playAgain;

do {
  let score = 0;
  let wrongAnswers = [];

  for (let i = 0; i < questions.length; i++) {
    let q = questions[i];
    let userAnswer = prompt(q.prompt + " " + "Options: " + q.options.join(", "));

    if (!userAnswer) {
      console.log("Question " + (i + 1) + ": No answer provided.");
      wrongAnswers.push("Q" + (i + 1) + ": " + q.prompt + " → Correct: " + q.answer);
      continue;
    }

    if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
      console.log("Question " + (i + 1) + ": Correct!");
      score++;
    } else {
      console.log("Question " + (i + 1) + ": Incorrect. The correct answer is " + q.answer + ".");
      wrongAnswers.push("Q" + (i + 1) + ": " + q.prompt + " → Correct: " + q.answer);
    }
  }

  let finalScore = score * 20;
  console.log("You scored: " + finalScore +"%" + (finalScore === 100 ? " you must be a Genius😒 " : " "));  
  console.log("QUIZ COMPLETED");

  if (wrongAnswers.length > 0) { 
    console.log("You missed the following questions:");
  for (let j = 0; j < wrongAnswers.length; j++) { console.log(wrongAnswers[j]); }
 }
  

  playAgain = prompt("Do you want to repeat the quiz? (yes/no)");
} while (playAgain && playAgain.toLowerCase() === "yes");