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

module.exports = { isEqual };
