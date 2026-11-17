function isSameType(ref1, ref2) {
  return typeof ref1 === typeof ref2;
}

function areObjectsEqualInSize(ref1, ref2) {
  return Object.keys(ref1).length !== Object.keys(ref2).length;
}

function isEqual(ref1, ref2) {
  if (!isSameType(ref1, ref2)) return false;

  if (ref1 === ref2) return true;

  if (typeof ref1 === "object") {
    if (Array.isArray(ref1) !== Array.isArray(ref2)) return false;

    if (areObjectsEqualInSize(ref1, ref2)) return false;

    for (const key in ref1) {
      if (!(key in ref2)) return false;

      return isEqual(ref1[key], ref2[key]);
    }

    return true;
  }

  return false;
}

module.exports = {
  isEqual,
};
