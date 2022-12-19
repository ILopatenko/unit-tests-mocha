const { expect } = require('chai');
const { palindromeIndex } = require('./palindromeIndex.solution');
const MainHelper = require('../../_helper/MainHelper');
const mainHelper = new MainHelper();

describe('This is a main test suite for hackerrank task Palindrome Index', () => {
   const alphabet = mainHelper.testData.alphabet.eng.lower;
   const letter = mainHelper.getRandomItem(alphabet);
   it('Test Case #1. Test string contains the same letters - even quantity [6;12]', () => {
      const repeatValue = mainHelper.getRandomBetween(3, 6) * 2;
      const testString = letter.repeat(repeatValue);
      expect(palindromeIndex(testString)).to.eq(-1);
   });
   it(`Test Case #2. Test string contains the same letters - odd quantity 
   [7;13]`, () => {
      const repeatValue = mainHelper.getRandomBetween(3, 6) * 2 + 1;
      const testString = letter.repeat(repeatValue);
      expect(palindromeIndex(testString)).to.eq(-1);
   });
});
