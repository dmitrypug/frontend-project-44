import {
  getRandomNumber, welcome, askQuestion, giveAnswer, compareAnswer, congratulations,
} from '../src/index.js';

const gcdTheGame = () => {
  const name = welcome();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();
    const quest = `${num1} ${num2}`;
    askQuestion(quest);
    const answer = giveAnswer();
    while (num1 !== 0 && num2 !== 0) {
      if (num1 > num2) {
        num1 %= num2;
      } else {
        num2 %= num1;
      }
    }
    const correctAnswer = String(num1 + num2);
    compareAnswer(answer, correctAnswer, name);
    if (answer !== correctAnswer) {
      return;
    }
  }
  congratulations(name);
};

export default gcdTheGame;
