class MainHelper {
   testData = {
      alphabet: {
         eng: { lower: 'abcdefghijklmnopqrstuvwxyz', upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      },
      numbers: '0123456789',
   };

   ////METHODS////

   //TODO? Check that min is less than max?
   getRandomBetween = (min = 0, max = 9) => Math.floor(Math.random() * (max - min + 1)) + min;

   //TODO? Check that min is less than max?
   getRandomEvenBetween = (min = 0, max = 9) => {
      const value = this.getRandomBetween(min, max);
      return value % 2 === 0 ? value : this.getRandomEvenBetween(min, max);
   };

   //TODO? Check that sourse is not empty? Check that sourse is an array or a string
   getRandomItem = sourse => sourse[this.getRandomBetween(0, sourse.length - 1)];
}

module.exports = MainHelper;
