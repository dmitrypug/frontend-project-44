import runEngine from '../src/index.js';
import getRandomInRange from '../src/utils.js';

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const gcdRules = 'Find the greatest common divisor of given numbers.';

const gcdRound = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

const gcdTheGame = () => {
  runEngine(gcdRules, gcdRound);
};

export default gcdTheGame;
