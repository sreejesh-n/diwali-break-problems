function type(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  if (Number.isNaN(value)) return "NaN";

  return typeof value;
}

function isEqual(ref1, ref2) {
  if (type(ref1) !== type(ref2)) return false;

  return ref1 === ref2;
}

function test(message, expected, ref1, ref2) {
  const result = isEqual(ref1, ref2) === expected ? "✅" : "❌";

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

function main() {
  testBooleans();
  testIntegers();
  testArrays();
}

main();
