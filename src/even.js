import play from './index.js';
import getRandomNumber from './lib.js';

const isEven = (num) => num % 2 === 0;

export default () => play('Answer "yes" if the number is even, otherwise answer "no".', () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
});
