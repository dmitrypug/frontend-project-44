import {
  getRandomNumber, welcome, askQuestion, giveAnswer, compareAnswer, congratulations,
} from '../src/index.js';

const progressionTheGame = () => {
  const name = welcome();
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= 3; i += 1) {
    let num = getRandomNumber();
    const difference = (getRandomNumber() % 10) + 1;
    const positionNumX = getRandomNumber() % 10;
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
    const quest = arr.join(' ');
    askQuestion(quest);
    const answer = giveAnswer();
    compareAnswer(answer, correctAnswer, name);
    if (answer !== correctAnswer) {
      return;
    }
  }
  congratulations(name);
};

export default progressionTheGame;
