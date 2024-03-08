const word = "jose roberto artiga flores";

const capitalize = (text) =>
  text
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

console.log(capitalize(word));

const debounceFunction = (values = (myFunction, delay) => {
  const time = setTimeout(() => {
    myFunction(values);
  }, delay);
});
