import getRandomNumber from './lib.js';
import play from './index.js';

const getGCD = (a, b) => {
  if (b === 0) return a;
  return getGCD(b, a % b);
};

export default () => {
  play('Find the greatest common divisor of given numbers.', () => {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const question = `${number1} ${number2}`;
    const answer = String(getGCD(number1, number2));
    return { question, answer };
  });
};
