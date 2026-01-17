const SpellChecker = require("hunspell-spellchecker");
const fs = require("fs");

const spojnice = require("../assets/spojnice");
const asocijacije = require("../assets/asocijacije");
const kviz = require("../assets/kviz");

// -------------------- SLAGALICA (letters) --------------------
const generateRandomLetters = () => {
  const alphabet = "abcdefghijklmnoprstuvz";
  const out = new Array(12);
  for (let i = 0; i < 12; i++) {
    out[i] = alphabet[(Math.random() * alphabet.length) | 0];
  }
  return out;
};

// -------------------- DICTIONARY HELPERS --------------------
// Hunspell .dic često ima:
// - prvu liniju kao broj riječi
// - a riječi mogu imati /FLAGS, npr: "kuca/ABC"
const parseDicWords = (dicContent) => {
  const lines = dicContent.split(/\r?\n/);
  const words = [];

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i].trim();
    if (!raw) continue;

    // preskoči prvu liniju ako je broj
    if (i === 0 && /^\d+$/.test(raw)) continue;

    // uzmi dio prije "/" (makni flags)
    const base = raw.split("/")[0].trim().toLowerCase();
    if (base) words.push(base);
  }

  return words;
};

const buildLetterCount = (letters) => {
  const count = Object.create(null);
  for (let i = 0; i < letters.length; i++) {
    const ch = letters[i];
    count[ch] = (count[ch] || 0) + 1;
  }
  return count;
};

const canFormWordFromCount = (word, letterCount) => {
  // kopiramo samo ono što trošimo (manji overhead od kopiranja cijelog objekta uvijek)
  const used = Object.create(null);

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    const available = letterCount[ch] || 0;
    const alreadyUsed = used[ch] || 0;

    if (alreadyUsed + 1 > available) return false;
    used[ch] = alreadyUsed + 1;
  }
  return true;
};

// Buckets: length -> array of words
let wordsByLen = null;
let maxWordLen = 0;

const initBucketsOnce = (dicPath) => {
  const dic = fs.readFileSync(dicPath, "utf-8");
  const words = parseDicWords(dic);

  const buckets = Object.create(null);
  let maxLen = 0;

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const len = w.length;
    if (len > maxLen) maxLen = len;
    (buckets[len] ||= []).push(w);
  }

  wordsByLen = buckets;
  maxWordLen = maxLen;
};

const findLongestWordFast = (letters) => {
  if (!wordsByLen) return null;

  const letterCount = buildLetterCount(letters);

  // kreni od max dužine prema dole
  for (let len = maxWordLen; len >= 1; len--) {
    const bucket = wordsByLen[len];
    if (!bucket || bucket.length === 0) continue;

    for (let i = 0; i < bucket.length; i++) {
      const w = bucket[i];
      if (canFormWordFromCount(w, letterCount)) return w;
    }
  }

  return null;
};

// -------------------- HUNSPELL INIT (once) --------------------
const spellchecker = new SpellChecker();

let isValidWord = null;
let longestWord = null;

try {
  const affPath = "./bs_BA.aff";
  const dicPath = "./bs_BA.dic";

  const aff = fs.readFileSync(affPath, "utf-8");
  const dic = fs.readFileSync(dicPath, "utf-8");

  const dictionaryForSpellChecker = spellchecker.parse({ aff, dic });
  spellchecker.use(dictionaryForSpellChecker);

  isValidWord = (word) => spellchecker.check(word);

  // ✅ init buckets once (FAST longest word)
  initBucketsOnce(dicPath);
  longestWord = (letters) => findLongestWordFast(letters);
} catch (error) {
  console.error("Error:", error);
}

// -------------------- MOJ BROJ --------------------
function generateNumbers() {
  const random999 = ((Math.random() * 999) | 0) + 1;

  const singleDigits = new Array(5);
  for (let i = 0; i < 5; i++) singleDigits[i] = ((Math.random() * 9) | 0) + 1;

  const doubleDigits = [10, 15, 20, 50];
  const randomDoubleDigit = doubleDigits[(Math.random() * doubleDigits.length) | 0];

  const extendedDoubleDigits = [10, 15, 20, 50, 100];
  const randomExtendedDigit = extendedDoubleDigits[(Math.random() * extendedDoubleDigits.length) | 0];

  return { random999, singleDigits, randomDoubleDigit, randomExtendedDigit };
}

// -------------------- SKOCKO / SPOJNICE / ASOCIJACIJE / KVIZ --------------------
const generateSkocko = () => {
  const out = new Array(4);
  for (let i = 0; i < 4; i++) out[i] = ((Math.random() * 6) | 0) + 1;
  return out;
};

const generateSpojnica = () => spojnice[(Math.random() * spojnice.length) | 0];
const generateAsocijacije = () => asocijacije[(Math.random() * asocijacije.length) | 0];

const generateKviz = () => {
  const count = 10;

  // Fisher-Yates shuffle (in-place copy)
  const questionsCopy = kviz.slice();
  for (let i = questionsCopy.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
  }
  return questionsCopy.slice(0, count);
};

module.exports = {
  generateKviz,
  generateRandomLetters,
  generateAsocijacije,
  generateSpojnica,
  isValidWord,
  generateSkocko,
  longestWord,
  generateNumbers,
};
