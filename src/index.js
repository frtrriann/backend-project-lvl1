import readlineSync from 'readline-sync';
import cli from './cli.js';

const ROUNDS = 3;

const play = (questionText, getQA) => {
  const name = cli();
  for (let i = 0; i < ROUNDS; i += 1) {
    const { question, answer } = getQA();
    console.log(questionText);
    const answerUser = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default play;
