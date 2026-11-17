const equality = require("./05-deep-equality");

const deepEqualityTestCases = [
  {
    title: "Numbers",
    a: 1,
    b: 2,
    expected: false,
  },
  {
    title: "Strings",
    a: "a",
    b: "a",
    expected: true,
  },
  {
    title: "Empty Array and Object",
    a: [],
    b: {},
    expected: false,
  },
  {
    title: "Empty Objects",
    a: {},
    b: {},
    expected: true,
  },
  {
    title: "Arrays with same elements",
    a: [1],
    b: [1],
    expected: true,
  },
  {
    title: "Number and String",
    a: 1,
    b: "1",
    expected: false,
  },
  {
    title: "Array Inside Object",
    a: { a: [1] },
    b: { a: [1] },
    expected: true,
  },
  {
    title: "Object Inside Object",
    a: { a: { b: 1 } },
    b: { a: { b: 1 } },
    expected: true,
  },
  {
    title: "Object with Different Order of Keys",
    a: { a: 1, b: 1 },
    b: { b: 1, a: 1 },
    expected: true,
  },
  {
    title: "Array with Different Order of Values Inside an Object",
    a: { a: [1, 2] },
    b: { a: [2, 1] },
    expected: false,
  },
  {
    title: "Empty Object vs Non-Empty Object",
    a: {},
    b: { a: 1, b: 2, c: 3 },
    expected: false,
  },
  {
    title: "Empty Array vs Non-Empty Array",
    a: [],
    b: [1, 2, 3, 4],
    expected: false,
  },
  {
    title: "Undefined and Number Inside Objects",
    a: { a: undefined },
    b: { b: 1 },
    expected: false,
  },
  {
    title: "Number and Undefined Inside Objects",
    a: { b: 1 },
    b: { a: undefined },
    expected: false,
  },
];

function testOutput(title, actual, expected) {
  const result = actual === expected ? "Passed ✅:" : "Failed ❌:";

  console.log(`${result} ${title}`);
}

for (const test of deepEqualityTestCases) {
  const actual = equality.isEqual(test.a, test.b);

  testOutput(test.title, actual, test.expected);
}
