const distinct = str => {
  return str.split("").reduce((accum, current) => {
    if (!accum.includes(current)) {
      accum.push(current);
    }
    return accum;
  }, []).length;
};

const zipUp = (arr1, arr2) => {
  let returnArr = [];
  for (let i = 0; i < arr1.length; i++) {
    returnArr.push(arr1[i]);
    returnArr.push(arr2[i]);
  }

  return returnArr;
};

const textContains = (str1, str2) => {
  // The old version, just for reference:
  // return str1.includes(str2);

  // "oxbow", "ow"
  // i = 0, k = 0
  // o = o? yes, k = 1
  // x = w? no, k = 0 (reset)
  // b = o? no, k = 0
  // o = o? yes, k = 1
  // w = w? yes, k = 2
  // check if k === str2.length
  //
  // "foop", "oo"
  // f = o? no, k = 0
  // o = o? yes, k = 1
  // o = o? yes, k = 2, stop working, since k === str2.length
  // return k === str2.length

  let k = 0; // tracks str2's index
  for (let i = 0; i < str1.length; i++) {
    // If we already matched str2 to a subset of str1,
    // just break and don't work on the rest of str1
    if (k === str2.length) {
      break;
    }

    // If we find a match between 2 letters,
    // move k forward by 1, if not, reset k
    if (str1[i] === str2[k]) {
      k++;
    } else {
      k = 0;
    }
  }
  return k === str2.length;
};

const howMany = (str, letter) => {
  return str.split("").reduce((accum, current) => {
    if (current === letter) {
      accum++;
    }
    return accum;
  }, 0);
};

const howManyAdvanced = (str, letter, caseInsensitive) => {
  if (caseInsensitive) {
    str = str.toLowerCase();
    letter = letter.toLowerCase();
  }
  return str.split("").reduce((accum, current) => {
    if (current === letter) {
      accum++;
    }
    return accum;
  }, 0);
};
