//https://www.hackerrank.com/challenges/palindrome-index
//Palindrome Index

const palindromeIndex = str => {
   let leftCorrection = 0;
   let rightCorrection = 0;
   let counter = 0;
   let index = null;
   for (let i = 0; i <= str.length / 2 - 1; i++) {
      let leftIndex = i + leftCorrection;
      let rightIndex = str.length - 1 - i - rightCorrection;
      let leftLetter = str[leftIndex];
      let rightLetter = str[rightIndex];

      if (leftLetter !== rightLetter) {
         counter++;
         if (counter > 1) return -1;
         if (str[leftIndex + 1] === rightLetter) {
            index = leftIndex;
            leftCorrection += 1;
            if (rightIndex - leftIndex - 1 < 3) {
               return index;
            }
            continue;
         }
         if (leftLetter === str[rightIndex - 1]) {
            index = rightIndex;
            rightCorrection += 1;
            if (rightIndex - 1 - leftIndex < 3) {
               return index;
            }
            continue;
         }
         return -1;
      }
   }
   return !index ? -1 : index;
};

module.exports = { palindromeIndex };
