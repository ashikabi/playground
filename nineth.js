const arr1 = [
  "avocado",
  "blackberry",
  "cranberry",
  "elderberry",
  "grapefruit",
  "guava",
  "lychee",
  "melon",
  "nectarine",
  "olive",
  "passionfruit",
  "pomegranate",
  "quince",
  "rhubarb",
  "tangerine",
  "persimmon",
  "dragonfruit",
  "gooseberry",
  "plum",
  "lime",
];
const arr2 = [
  "apple",
  "apricot",
  "banana",
  "cherry",
  "grape",
  "kiwi",
  "lemon",
  "orange",
  "peach",
  "pear",
  "plum",
  "raspberry",
  "strawberry",
  "apricot",
  "blueberry",
  "coconut",
  "fig",
  "mango",
  "papaya",
  "pineapple",
];

const sortedArrays = (arrayA, arrayB) => {
  const result = [];
  const merged = [...arrayA, ...arrayB];

  const getMinElement = (localArr) => {
    let min = localArr[0];
    for (let idx = 0; idx < localArr.length; idx++) {
      if (localArr[idx] < min) {
        min = localArr[idx];
      }
    }
    return min;
  };

  for (let idx = 0; idx < merged.length; idx++) {
    const min = getMinElement(
      merged.filter((element) => !result.includes(element))
    );
    result.push(min);
  }

  return result;
};

console.log(sortedArrays(arr1, arr2));

const text = "rotator";

const isPalindrome = (word) => {
  let flag = true;
  for (let idx = 0; idx < word.length; idx++) {
    if (word[idx] !== word[word.length - (idx + 1)]) {
      flag = false;
    }
    if (idx === word.length - (idx + 1)) break;
  }
  return flag;
};

console.log("isPalindrome === ", isPalindrome(text));

arr1.fla;
