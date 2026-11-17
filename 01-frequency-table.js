function getElementFrequencies(items) {
  const frequencies = {};

  for (const item of items) {
    frequencies[item] = (frequencies[item] ?? 0) + 1;
  }

  return frequencies;
}

const items = ["apple", "banana", "apple", "apple", "orange", "banana"];
const elementFrequencies = getElementFrequencies(items);

console.log(elementFrequencies);
