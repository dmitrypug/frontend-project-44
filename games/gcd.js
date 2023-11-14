import getRandomInRange from '../src/utils.js';
import {
  welcome, askQuestion, giveAnswer, compareAnswer, congratulations,
} from '../src/index.js';

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

const gcdTheGame = () => {
  const name = welcome();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    const num1 = getRandomInRange();
    const num2 = getRandomInRange();
    const quest = `${num1} ${num2}`;
    askQuestion(quest);
    const answer = giveAnswer();
    const correctAnswer = String(gcd(num1, num2));
    compareAnswer(answer, correctAnswer, name);
    if (answer !== correctAnswer) {
      return;
    }
  }
  congratulations(name);
};

export default gcdTheGame;
