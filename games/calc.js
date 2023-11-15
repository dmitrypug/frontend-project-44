import getRandomInRange from '../src/utils.js';
import runEngine from '../src/index.js';

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

const calcRules = 'What is the result of the expression?';

const calcRound = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const sym = getRandomSymbol();
  const question = `${num1} ${sym} ${num2}`;
  const correctAnswer = String(calc(num1, sym, num2));
  return [question, correctAnswer];
};

const calcTheGame = () => {
  runEngine(calcRules, calcRound);
};

export default calcTheGame;
