import getRandomInRange from '../src/utils.js';
import {
  welcome, askQuestion, giveAnswer, compareAnswer, congratulations,
} from '../src/index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return (num !== 1) && (num !== 0);
};

const primeTheGame = () => {
  const name = welcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const num = getRandomInRange();
    askQuestion(num);
    const answer = giveAnswer();
    const correctAnswer = isPrime(num) ? 'yes' : 'no';
    compareAnswer(answer, correctAnswer, name);
    if (answer !== correctAnswer) {
      return;
    }
  }
  congratulations(name);
};

export default primeTheGame;
