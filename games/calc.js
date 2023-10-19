import {
  getRandomNumber, welcome, askQuestion, giveAnswer, compareAnswer, congratulations,
} from '../src/index.js';

const getRandomSymbol = () => {
  const symbols = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * symbols.length);
  return symbols[rand];
};

const calcTheGame = () => {
  const name = welcome();
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const sym = getRandomSymbol();
    const quest = `${num1} ${sym} ${num2}`;
    askQuestion(quest);
    const answer = giveAnswer();
    let correctAnswer;
    switch (sym) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
    }
    correctAnswer = String(correctAnswer);
    compareAnswer(answer, correctAnswer, name);
    if (answer !== correctAnswer) {
      return;
    }
  }
  congratulations(name);
};

export default calcTheGame;
