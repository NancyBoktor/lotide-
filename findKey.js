const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const callBack = (x) => x.stars === 2;
const findKey = function (obj, callBack) {
  for (const key in obj) {
    if (callBack(obj[key])) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

assertEqual(findKey(bestTVShowsByGenre, callBack), "noma");