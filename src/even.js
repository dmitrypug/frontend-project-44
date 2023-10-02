import readlineSync from 'readline-sync';

const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
}

const evenTheGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 1; i <= 3; i += 1) {
        const num = getRandomNumber();
        console.log(`Question: ${num}`);
        const answer = readlineSync.question('Your answer: ');
        let correctAnswer = (num % 2 === 0) ? 'yes': 'no';
        if (answer !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        } else {
            console.log('Correct!');
        }
    }
    console.log(`Congratulations, ${name}!`);
}

export default evenTheGame;