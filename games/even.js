import getRandomInRange from '../src/utils.js';
import {
  welcome, askQuestion, giveAnswer, compareAnswer, congratulations,
} from '../src/index.js';

const evenTheGame = () => {
  const name = welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const num = getRandomInRange();
    askQuestion(num);
    const answer = giveAnswer();
    const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
    compareAnswer(answer, correctAnswer, name);
    if (answer !== correctAnswer) {
      return;
    }
  }
  congratulations(name);
};

export default evenTheGame;
