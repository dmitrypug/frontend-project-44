import runEngine from '../src/index.js';
import getRandomInRange from '../src/utils.js';

const evenRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenRound = () => {
  const num = getRandomInRange();
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
  return [num, correctAnswer];
};

const evenTheGame = () => {
  runEngine(evenRules, evenRound);
};

export default evenTheGame;
