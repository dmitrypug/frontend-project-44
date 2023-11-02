import {
  getRandomNumber, welcome, askQuestion, giveAnswer, compareAnswer, congratulations,
} from '../src/index.js';

const getRandomSymbol = () => {
  const symbols = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * symbols.length);
  return symbols[rand];
};

const calc = (num1, symbol, num2) => {
  let result;
  switch (symbol) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result;
};

const calcTheGame = () => {
  const name = welcome();
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const sym = getRandomSymbol();
    const quest = `${num1} ${sym} ${num2}`;
    askQuestion(quest);
    const answer = giveAnswer();
    const correctAnswer = String(calc(num1, sym, num2));
    compareAnswer(answer, correctAnswer, name);
    if (answer !== correctAnswer) {
      return;
    }
  }
  congratulations(name);
};

export default calcTheGame;
