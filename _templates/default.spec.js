const { expect } = require('chai');
const { palindromeIndex } = require('./palindromeIndex');

describe('This is a main test suite for hackerrank task Palindrome Index', () => {
   it('Test Case #1. Palindrome with the same letters', () => {
      const testString = 'aaaaaaaaaaaaaaaaaaa';
      expect(palindromeIndex(testString)).to.eq(-1);
   });
   it('Test Case #2. Palindrome with the same letters', () => {
      const testString = 'aaaaaaaaaaaaaaaaaaa';
      expect(palindromeIndex(testString)).to.eq(-1);
   });
});
