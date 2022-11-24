// question 1

const addToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const outer = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      const inner = arr[j];
      if (outer + inner === 0) {
        return true;
      }
    }
  }
  return false;
};

console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));

// runtime -  O(n^2)

// question 2

const hasUniqueCharacters = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(hasUniqueCharacters("Monday"));
console.log(hasUniqueCharacters("Moonday"));

// runtime -  O(n^2)

// question 3

const isPangram = (string) => {
  let str = string.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (str.includes(alphabet[i]) === false) {
      return false;
    }
  }
  return true;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

// runtime - O(n)

// question 4

const findLongestWord = (arr) => {
  let longestWord = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }
  return longestWord;
};

console.log(findLongestWord(["hi", "hello", "Hey"]));

// runtime - O(n)
