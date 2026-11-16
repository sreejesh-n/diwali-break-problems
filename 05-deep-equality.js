function isSameType(ref1, ref2) {
  return Array.isArray(ref1) === Array.isArray(ref2);
}

function areObjectsEqualInSize(ref1, ref2) {
  return Object.keys(ref1).length !== Object.keys(ref2).length;
}

function isEqual(ref1, ref2) {
  if (!isSameType(ref1, ref2)) return false;

  if (ref1 === ref2) return true;

  if (typeof ref1 === "object") {
    if (areObjectsEqualInSize(ref1, ref2)) {
      return false;
    }

    for (const key in ref1) {
      if (!(key in ref2)) return false;

      return isEqual(ref1[key], ref2[key]);
    }

    return true;
  }

  return false;
}

function testIsEqual(testCases) {
  for (const test of testCases) {
    const result = isEqual(test.v1, test.v2);
    console.log(`${result} ${test.expected}`);
  }
}

const test = [
  { v1: 1, v2: 2, expected: false },
  { v1: "a", v2: "a", expected: true },
  { v1: [], v2: {}, expected: false },
  { v1: {}, v2: {}, expected: true },
  { v1: [1], v2: [1], expected: true },
  { v1: 1, v2: "1", expected: false },
  { v1: { a: [1] }, v2: { a: [1] }, expected: true },
  { v1: { a: { b: 1 } }, v2: { a: { b: 1 } }, expected: true },
  { v1: { a: 1, b: 1 }, v2: { b: 1, a: 1 }, expected: true },
  { v1: { a: [1, 2] }, v2: { a: [2, 1] }, expected: false },
  { v1: {}, v2: { a: 1, b: 2, c: 3 }, expected: false },
  { v1: [], v2: [1, 2, 3, 4], expected: false },
  { v1: { a: undefined }, v2: { b: 1 }, expected: false },
  { v1: { b: 1 }, v2: { a: undefined }, expected: false },
];

testIsEqual(test);
