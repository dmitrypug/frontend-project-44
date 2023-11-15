import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const askQuestion = (yourQ) => {
  console.log(`Question: ${yourQ}`);
};

const giveAnswer = () => readlineSync.question('Your answer: ');

const compareAnswer = (answer, correctAnswer, name) => {
  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log('Correct!');
  }
};

const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const roundsCount = 3;

const runEngine = (rules, generateRound) => {
  const name = welcome();
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    askQuestion(question);
    const answer = giveAnswer();
    compareAnswer(answer, correctAnswer, name);
    if (answer !== correctAnswer) {
      return;
    }
  }
  congratulations(name);
};

export default runEngine;
