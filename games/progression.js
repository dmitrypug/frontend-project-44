import runEngine from '../src/index.js';
import getRandomInRange from '../src/utils.js';

const progressionRules = 'What number is missing in the progression?';

const progressionRound = () => {
  let num = getRandomInRange();
  const difference = (getRandomInRange() % 10) + 1;
  const positionNumX = getRandomInRange() % 10;
  const arr = [];
  let correctAnswer;
  for (let j = 0; j < 10; j += 1) {
    if (j === positionNumX) {
      arr.push('..');
      correctAnswer = String(num);
    } else {
      arr.push(num);
    }
    num += difference;
  }
  const question = arr.join(' ');
  return [question, correctAnswer];
};

const progressionTheGame = () => {
  runEngine(progressionRules, progressionRound);
};

export default progressionTheGame;
