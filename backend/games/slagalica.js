const SpellChecker = require('hunspell-spellchecker');
const fs = require('fs');

// Funkcija za generisanje nasumičnih slova
const generateRandomLetters = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return Array.from({ length: 12 }, () =>
    alphabet[Math.floor(Math.random() * alphabet.length)]
  );
};

// Funkcija za učitavanje datoteke i pretvaranje u set riječi
const loadDictionary = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return new Set(data.split('\n').map((word) => word.trim().toLowerCase())); // Pretvaramo u mala slova
};

// Funkcija za provjeru može li se riječ napraviti od dostupnih slova
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

// Funkcija koja traži najdužu validnu riječ koja se može sastaviti od slova
const findLongestWord = (letters, dictionary) => {
  // Sortiramo riječi po dužini od najduže prema kraćoj
  const sortedWords = Array.from(dictionary).sort((a, b) => b.length - a.length);

  for (const word of sortedWords) {
    if (canFormWordFromLetters(word, letters)) {
      return word; // Vraćamo prvu validnu riječ koja se može napraviti
    }
  }

  return null; // Ako nije pronađena nijedna riječ
};

const spellchecker = new SpellChecker();
let isValidWord = null;
let longestWord = null
try {
  // Učitavanje datoteka
  const affPath = './bs_BA.aff';
  const dicPath = './bs_BA.dic';

  const aff = fs.readFileSync(affPath, 'utf-8');
  const dic = fs.readFileSync(dicPath, 'utf-8');

  // Inicijalizacija spellcheckera
  const dictionaryForSpellChecker = spellchecker.parse({ aff, dic });
  spellchecker.use(dictionaryForSpellChecker);

  // Provjera riječi
  isValidWord = (word) => spellchecker.check(word);

  const loadedDictionary = loadDictionary(dicPath);
  longestWord = (letters) => {
    return findLongestWord(letters, loadedDictionary)
}
} catch (error) {
  console.error('Error:', error);
}

function generateNumbers() {
  // Generisanje broja od 1-999
  const random999 = Math.floor(Math.random() * 999) + 1;

  // Generisanje pet jednoznamenkastih brojeva
  const singleDigits = Array.from({ length: 5 }, () => Math.floor(Math.random() * 9) + 1);

  // Generisanje jednog dvocifrenog broja (10, 15, 20, 50)
  const doubleDigits = [10, 15, 20, 50];
  const randomDoubleDigit = doubleDigits[Math.floor(Math.random() * doubleDigits.length)];

  // Generisanje još jednog broja (10, 15, 20, 50, ili 100)
  const extendedDoubleDigits = [...doubleDigits, 100];
  const randomExtendedDigit = extendedDoubleDigits[Math.floor(Math.random() * extendedDoubleDigits.length)];

  return {
      random999,
      singleDigits,
      randomDoubleDigit,
      randomExtendedDigit
  };
}

module.exports = { generateRandomLetters, isValidWord, longestWord, generateNumbers };
