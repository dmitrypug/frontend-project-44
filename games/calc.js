import {
  getRandomNumber, welcome, askQuestion, giveAnswer, compareAnswer, congratulations,
} from '../src/index.js';

const getRandomSymbol = () => {
  const symbols = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * symbols.length);
  return symbols[rand];
};

const calcTheGame = () => {
  const name = welcome();
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const quest = `${getRandomNumber()} ${getRandomSymbol()} ${getRandomNumber()}`;
    askQuestion(quest);
    const answer = giveAnswer();
    const correctAnswer = String(eval(quest));
    compareAnswer(answer, correctAnswer, name);
    if (answer !== correctAnswer) {
      return;
    }
  }
  congratulations(name);
};

export default calcTheGame;
