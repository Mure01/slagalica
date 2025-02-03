const SpellChecker = require('hunspell-spellchecker');
const fs = require('fs');
const spojnice = require('../assets/spojnice')
const asocijacije = require('../assets/asocijacije')
const generateRandomLetters = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return Array.from({ length: 12 }, () =>
    alphabet[Math.floor(Math.random() * alphabet.length)]
  );
};

const loadDictionary = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return new Set(data.split('\n').map((word) => word.trim().toLowerCase())); // Pretvaramo u mala slova
};

const canFormWordFromLetters = (word, letters) => {
  const letterCount = {};
  for (const letter of letters) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  for (const letter of word) {
    if (!letterCount[letter] || letterCount[letter] === 0) {
      return false;
    }
    letterCount[letter] -= 1;
  }
  return true;
};

const findLongestWord = (letters, dictionary) => {
  const sortedWords = Array.from(dictionary).sort((a, b) => b.length - a.length);

  for (const word of sortedWords) {
    if (canFormWordFromLetters(word, letters)) {
      return word; 
    }
  }

  return null; 
};

const spellchecker = new SpellChecker();
let isValidWord = null;
let longestWord = null
try {
  const affPath = './bs_BA.aff';
  const dicPath = './bs_BA.dic';

  const aff = fs.readFileSync(affPath, 'utf-8');
  const dic = fs.readFileSync(dicPath, 'utf-8');

  const dictionaryForSpellChecker = spellchecker.parse({ aff, dic });
  spellchecker.use(dictionaryForSpellChecker);

  isValidWord = (word) => spellchecker.check(word);

  const loadedDictionary = loadDictionary(dicPath);
  longestWord = (letters) => {
    return findLongestWord(letters, loadedDictionary)
}
} catch (error) {
  console.error('Error:', error);
}

function generateNumbers() {
  const random999 = Math.floor(Math.random() * 999) + 1;

  const singleDigits = Array.from({ length: 5 }, () => Math.floor(Math.random() * 9) + 1);

  const doubleDigits = [10, 15, 20, 50];
  const randomDoubleDigit = doubleDigits[Math.floor(Math.random() * doubleDigits.length)];

  const extendedDoubleDigits = [...doubleDigits, 100];
  const randomExtendedDigit = extendedDoubleDigits[Math.floor(Math.random() * extendedDoubleDigits.length)];

  return {
      random999,
      singleDigits,
      randomDoubleDigit,
      randomExtendedDigit
  };
}
const generateSkocko = () => {
  const skocko = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  return skocko;
}

const generateSpojnica = () => {
  const randomIndex = Math.floor(Math.random() * spojnice.length);
  return spojnice[randomIndex];
}

const generateAsocijacije = () => {
  const randomIndex = Math.floor(Math.random() * asocijacije.length);
  return asocijacije[randomIndex];
}

module.exports = { generateRandomLetters,generateAsocijacije, generateSpojnica, isValidWord, generateSkocko, longestWord, generateNumbers };
