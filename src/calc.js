import getRandomNumber from './lib.js';
import play from './index.js';

const operations = [
  {
    func: (a, b) => a + b,
    operation: '+',
  },
  {
    func: (a, b) => a - b,
    operation: '-',
  },
  {
    func: (a, b) => a * b,
    operation: '*',
  },
];

export default () => {
  play('What is the result of the expression?', () => {
    const num1 = getRandomNumber(0, 10);
    const num2 = getRandomNumber(0, 10);
    const operationIndex = getRandomNumber(0, operations.length - 1);
    const { operation, func } = operations[operationIndex];
    return {
      answer: String(func(num1, num2)),
      question: `${num1} ${operation} ${num2}`,
    };
  });
};
