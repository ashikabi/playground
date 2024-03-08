const text = "Jose Roberto Artiga";
console.log(
  text
    .split("")
    .map((_, idx) => text[text.length - (1 + idx)])
    .join("")
);

const counterChar = (word) => {
  const totalByLetter = (word, letter) =>
    word
      .toLowerCase()
      .split("")
      .filter((item) => item === letter).length;

  return word
    .trim()
    .toLowerCase()
    .split("")
    .map((item) => ({ letter: item, count: totalByLetter(word, item) }));
};

console.log(counterChar(text));
