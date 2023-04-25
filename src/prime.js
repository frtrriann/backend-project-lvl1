import getRandomNumber from './lib.js';
import play from './index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

export default () => {
  play('Answer "yes" if given number is prime. Otherwise answer "no".', () => {
    const question = getRandomNumber(2, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
    return {
      answer,
      question,
    };
  });
};
