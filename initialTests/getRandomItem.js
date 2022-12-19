const { expect } = require('chai');

const getRandomItem = (min = 0, max = 9) => Math.floor(Math.random() * (max - min + 1)) + min;

describe('\nMain test suite for getRandomBetween(). I want to test default values and custom values', () => {
   const n = 201;
   const value = 100;
   const customMin = getRandomBetween(0 - value, 0);
   const customMax = getRandomBetween(1, value);
   const methodMax = 9;
   const methodMin = 0;
   describe(`\n   getRandomBetween() with default values. Method should return a number [${methodMin};${methodMax}]`, () => {
      let generatedMin = Infinity;
      let generatedMax = -Infinity;
      for (let i = 0; i < n; i++) {
         const testValue = getRandomBetween();
         if (n > methodMax - methodMin) {
            if (testValue > generatedMax) generatedMax = testValue;
            if (testValue < generatedMin) generatedMin = testValue;
         }
         it(`Test case #${i + 1}. testValue is "${testValue}". [${methodMin};${methodMax}]`, () => {
            expect(
               testValue,
               `Expected testValue "${testValue}" is "number" but it is "${typeof testValue}"`
            ).to.be.a('number');
            expect(testValue >= methodMin, `Expected testValue "${testValue}" >= "${methodMin}"`).to
               .be.true;
            expect(testValue <= methodMax, `Expected testValue "${testValue}" <= "${methodMax}"`).to
               .be.true;
         });
      }
      if (n > methodMax - methodMin) {
         it(`Checking that min possible testValue was generated`, () => {
            expect(
               generatedMin === methodMin,
               `Expected generatedMax "${generatedMin}" = "${methodMin}"`
            ).to.be.true;
         });
         it(`Checking that max possible testValue was generated`, () => {
            expect(
               generatedMax === methodMax,
               `Expected generatedMax "${generatedMax}" = "${methodMax}"`
            ).to.be.true;
         });
      }
   });
   describe(`\n   getRandomBetween() with custom random values. Method should return a number [${customMin};${customMax}]`, () => {
      let generatedMin = Infinity;
      let generatedMax = -Infinity;
      for (let i = 0; i < n; i++) {
         const testValue = getRandomBetween(customMin, customMax);
         if (n > customMax - customMin) {
            if (testValue > generatedMax) generatedMax = testValue;
            if (testValue < generatedMin) generatedMin = testValue;
         }
         it(`Test case #${i + 1}. testValue is "${testValue}". [${customMin};${customMax}]`, () => {
            expect(
               testValue,
               `Expected testValue "${testValue}" is "number" but it is "${typeof testValue}"`
            ).to.be.a('number');
            expect(testValue >= customMin, `Expected testValue "${testValue}" >= "${customMin}"`).to
               .be.true;
            expect(testValue <= customMax, `Expected testValue "${testValue}" <= "${customMax}"`).to
               .be.true;
         });
      }
      if (n > customMax - customMin) {
         it(`Checking that min possible testValue was generated`, () => {
            expect(
               generatedMin === customMin,
               `Expected generatedMax "${generatedMin}" = "${customMin}"`
            ).to.be.true;
         });
         it(`Checking that max possible testValue was generated`, () => {
            expect(
               generatedMax === customMax,
               `Expected generatedMax "${generatedMax}" = "${customMax}"`
            ).to.be.true;
         });
      }
   });
});
