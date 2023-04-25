import getRandomNumber from './lib.js';
import play from './index.js';

const PROGRESSION_LENGTH = 10;

const getProgression = (begin, step, missingIndex, length) => [...Array(length)]
  .map((_, i) => {
    if (i === missingIndex) return '..';
    return begin + step * i;
  })
  .join(' ');

export default () => {
  play('What number is missing in the progression?', () => {
    const begin = getRandomNumber(0, 20);
    const step = getRandomNumber(1, 5);
    const missingIndex = getRandomNumber(0, PROGRESSION_LENGTH - 1);

    const question = !Number.isInteger(begin) || !Number.isInteger(step) ? [] : getProgression(
      begin,
      step,
      missingIndex,
      PROGRESSION_LENGTH,
    );
    const answer = String(begin + step * missingIndex);
    return { answer, question };
  });
};
