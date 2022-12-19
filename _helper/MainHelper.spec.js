const { expect } = require('chai');
const MainHelper = require('./MainHelper');

const mainHelper = new MainHelper();

const testQuantity = 200;
const value = 100;
const customMin = mainHelper.getRandomBetween(0 - value, 0);
const customMax = mainHelper.getRandomBetween(1, value);
const methodMax = 9;
const methodMin = 0;
describe('This is a main test suite for MainHelper', () => {
   describe('\n Main test suite for getRandomBetween() that takes in 2 parameters min and max. Returns a random number [min;max]. Default values [0;9].', () => {
      describe(`\n   getRandomBetween() with default values. Method should return a number [${methodMin};${methodMax}]`, () => {
         let generatedMin = Infinity;
         let generatedMax = -Infinity;
         for (let i = 0; i < testQuantity; i++) {
            const testValue = mainHelper.getRandomBetween();
            if (testQuantity > methodMax - methodMin) {
               if (testValue > generatedMax) generatedMax = testValue;
               if (testValue < generatedMin) generatedMin = testValue;
            }
            it(`Test case #${
               i + 1
            }. testValue is "${testValue}". [${methodMin};${methodMax}]`, () => {
               expect(
                  testValue,
                  `Expected testValue "${testValue}" is "number" but it is "${typeof testValue}"`
               ).to.be.a('number');
               expect(testValue >= methodMin, `Expected testValue "${testValue}" >= "${methodMin}"`)
                  .to.be.true;
               expect(testValue <= methodMax, `Expected testValue "${testValue}" <= "${methodMax}"`)
                  .to.be.true;
            });
         }
         if (testQuantity > methodMax - methodMin) {
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
         for (let i = 0; i < testQuantity; i++) {
            const testValue = mainHelper.getRandomBetween(customMin, customMax);
            if (testQuantity > customMax - customMin) {
               if (testValue > generatedMax) generatedMax = testValue;
               if (testValue < generatedMin) generatedMin = testValue;
            }
            it(`Test case #${
               i + 1
            }. testValue is "${testValue}". [${customMin};${customMax}]`, () => {
               expect(
                  testValue,
                  `Expected testValue "${testValue}" is "number" but it is "${typeof testValue}"`
               ).to.be.a('number');
               expect(testValue >= customMin, `Expected testValue "${testValue}" >= "${customMin}"`)
                  .to.be.true;
               expect(testValue <= customMax, `Expected testValue "${testValue}" <= "${customMax}"`)
                  .to.be.true;
            });
         }
         if (testQuantity > customMax - customMin) {
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
   ////
   describe('\n Main test suite for getRandomEvenBetween() that takes in 2 parameters min and max. Returns a random even number [min;max]. Default values [0;8].', () => {
      describe(`\n   getRandomEvenBetween() with default values. Method should return an EVEN number [${methodMin};${methodMax}]`, () => {
         let generatedMin = Infinity;
         let generatedMax = -Infinity;
         for (let i = 0; i < testQuantity; i++) {
            const testValue = mainHelper.getRandomEvenBetween();
            if (testQuantity > methodMax - methodMin) {
               if (testValue > generatedMax) generatedMax = testValue;
               if (testValue < generatedMin) generatedMin = testValue;
            }
            it(`Test case #${
               i + 1
            }. testValue is "${testValue}". [${methodMin};${methodMax}]`, () => {
               expect(
                  testValue,
                  `Expected testValue "${testValue}" is "number" but it is "${typeof testValue}"`
               ).to.be.a('number');
               expect(testValue >= methodMin, `Expected testValue "${testValue}" >= "${methodMin}"`)
                  .to.be.true;
               expect(testValue < methodMax, `Expected testValue "${testValue}" <= "${methodMax}"`)
                  .to.be.true;
            });
         }
         if (testQuantity > methodMax - methodMin) {
            it(`Checking that min possible testValue was generated`, () => {
               expect(
                  generatedMin === methodMin,
                  `Expected generatedMax "${generatedMin}" = "${methodMin}"`
               ).to.be.true;
            });
            it(`Checking that max possible testValue was generated`, () => {
               expect(
                  generatedMax === methodMax - 1,
                  `Expected generatedMax "${generatedMax}" = "${methodMax - 1}"`
               ).to.be.true;
            });
         }
      });
      describe(`\n   getRandomBetween() with custom random values. Method should return an EVEN number [${customMin};${customMax}]`, () => {
         let generatedMin = Infinity;
         let generatedMax = -Infinity;
         for (let i = 0; i < testQuantity; i++) {
            const testValue = mainHelper.getRandomEvenBetween(customMin, customMax);
            console.log({ testValue });
            if (testQuantity > customMax - customMin) {
               if (testValue > generatedMax) generatedMax = testValue;
               if (testValue < generatedMin) generatedMin = testValue;
            }
            it(`Test case #${
               i + 1
            }. testValue is "${testValue}". [${customMin};${customMax}]`, () => {
               expect(
                  testValue,
                  `Expected testValue "${testValue}" is "number" but it is "${typeof testValue}"`
               ).to.be.a('number');
               expect(testValue >= customMin, `Expected testValue "${testValue}" >= "${customMin}"`)
                  .to.be.true;
               expect(testValue <= customMax, `Expected testValue "${testValue}" <= "${customMax}"`)
                  .to.be.true;
            });
         }
         if (testQuantity > customMax - customMin) {
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
   ////
   /* describe.skip('\n   getRandomItem() takes in a source (string or array). Returns a random item/letter/element', () => {
      describe('This is a main test suite for arrays (test array is made using split("") on string of lowercase eng alphabet)', () => {
         const array = mainHelper.testData.alphabet.eng.lower.split('');
         for (let i = 0; i < testQuantity; i++) {
            const randomValue = mainHelper.getRandomItem(array);
            it(`This is a test case #${i + 1}. Test value is "${randomValue}"`, () => {
               expect(randomValue).to.be.a('string');
               expect(array).to.include(randomValue);
            });
         }
      });
      describe('This is a main test suite for strings (test string is eng lowercase alphabet)', () => {
         const alphabet = mainHelper.testData.alphabet.eng.lower;
         for (let i = 0; i < testQuantity; i++) {
            const randomValue = mainHelper.getRandomItem(alphabet);
            it(`This is a test case #${i + 1}. Test value is "${randomValue}"`, () => {
               expect(randomValue).to.be.a('string');
               expect(alphabet).to.include(randomValue);
            });
         }
      });
   }); */
});
