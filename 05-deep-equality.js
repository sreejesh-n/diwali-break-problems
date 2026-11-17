function type(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  if (Number.isNaN(value)) return "NaN";

  return typeof value;
}

function areArraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (!isEqual(a[i], b[i])) return false;
  }

  return true;
}

function areObjectsEqual(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (const key in a) {
    if (!(key in b)) return false;
    if (!isEqual(a[key], b[key])) return false;
  }

  return true;
}

function areValuesEqual(a, b) {
  return a === b;
}

function isEqual(a, b) {
  if (type(a) !== type(b)) return false;

  switch (type(a)) {
    case "NaN":
      return true;
    case "array":
      return areArraysEqual(a, b);
    case "object":
      return areObjectsEqual(a, b);
  }

  return areValuesEqual(a, b);
}

function test(message, expected, a, b) {
  const result = isEqual(a, b) === expected ? "✅" : "❌";

  console.log(`${result} | ${message}`);
}

function testBooleans() {
  test("two true booleans should be equal", true, true, true);
  test("two false booleans should be equal", true, false, false);
  test("two different booleans should be unequal", false, true, false);
  test("boolean true and string 'true' should be unequal", false, true, "true");
}

function testIntegers() {
  test("two same positive integers should be equal", true, 1, 1);
  test("two same negative integers should be equal", true, -1, -1);
  test("two different integers should be unequal", false, 2, 1);
  test("number 1 and string '1' should be unequal", false, 1, "1");
}

function testArrays() {
  test("two empty arrays should be equal", true, [], []);
  test("empty array and filled array should be unequal", false, [], [1, 2, 3]);
  test("two same nested arrays should be equal", true, [[]], [[]]);
  test("two different nested arrays should be unequal", false, [[]], [[1]]);
  test("normal array and nested array should be unequal", false, [], [[]]);
  test("different arrays should be unequal", false, [1, 2], [2, 1]);
}

function testObjects() {
  test("two empty objects should be equal", true, {}, {});
  test("empty object and filled object should be unequal", false, {}, { a: 1 });
  test(
    "two objects with same entries should be equal",
    true,
    { a: 1, b: 2 },
    { a: 1, b: 2 },
  );
  test(
    "two objects with same keys but different values should be unequal",
    false,
    { a: 1, b: 2 },
    { a: 2, b: 1 },
  );
  test(
    "two objects with different keys should be unequal",
    false,
    { a: 1 },
    { b: 1 },
  );
  test(
    "two objects with same entries in different order should be eual",
    true,
    { a: 1, b: 2 },
    { b: 2, a: 1 },
  );
}

function testNanUndefinedNull() {
  test("two undefineds should be true", true, undefined, undefined);
  test("two nulls should be equal", true, null, null);
  test("two NaNs should be equal", true, NaN, NaN);
}

function testStrings() {
  test("same strings should be equal", true, "hello", "hello");
  test("different strings should be unequal", false, "hello", "hi");
}

function main() {
  testBooleans();
  testIntegers();
  testArrays();
  testObjects();
  testNanUndefinedNull();
  testStrings();
}

main();
