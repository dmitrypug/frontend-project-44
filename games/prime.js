import runEngine from '../src/index.js';
import getRandomInRange from '../src/utils.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return (num !== 1) && (num !== 0);
};

const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeRound = () => {
  const num = getRandomInRange();
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [num, correctAnswer];
};

const primeTheGame = () => {
  runEngine(primeRules, primeRound);
};

export default primeTheGame;
