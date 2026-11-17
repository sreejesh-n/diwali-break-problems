function ascendingStretch(sequence, startIndex) {
  const stretch = [];
  stretch.push(sequence[startIndex]);

  let currIndex = startIndex + 1;
  while (stretch.at(-1) <= sequence[currIndex] && currIndex < sequence.length) {
    stretch.push(sequence[currIndex]);
    currIndex++;
  }

  return stretch;
}

function decendingStretch(sequence, startIndex) {
  const stretch = [];
  stretch.push(sequence[startIndex]);

  let currIndex = startIndex + 1;
  while (stretch.at(-1) >= sequence[currIndex] && currIndex < sequence.length) {
    stretch.push(sequence[currIndex]);
    currIndex++;
  }

  return stretch;
}

function getRuns(sequence) {
  const result = [];

  let startIndex = 0;
  let stretch;

  while (startIndex < sequence.length) {
    stretch = [sequence[startIndex]];

    if (sequence[startIndex] <= sequence[startIndex + 1]) {
      stretch = ascendingStretch(sequence, startIndex);
    } else if (sequence[startIndex] >= sequence[startIndex + 1]) {
      stretch = decendingStretch(sequence, startIndex);
    }

    result.push(stretch);
    startIndex += stretch.length;
  }

  return result;
}

// const sequence = [1, 2, 3, 4, 6, 4, 2, 1, 2, 3];
// const sequence = [1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 3, 3, 3, 3];
const sequence = [4, 3, 3, 4, 5, 1, 1, 5, 4, 4, 4, 4, 5, 5, 5, 3, 3, 4, 1];
const runs = getRuns(sequence);

console.log(runs);
