const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Geography",
    question: "What is the capital of Japan?",
    choices: ["Beijing", "Tokyo", "Seoul"],
    answer: "Tokyo"
  },
  {
    category: "Math",
    question: "What is the value of Pi rounded to two decimal places?",
    choices: ["3.14", "3.16", "3.12"],
    answer: "3.14"
  },
  {
    category: "History",
    question: "In what year did World War II end?",
    choices: ["1943", "1945", "1947"],
    answer: "1945"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility"],
    answer: "Central Processing Unit"
  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}