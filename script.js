const distinct = str => {
  return Object.keys(
    str.split("").reduce((accum, current) => {
      if (accum[current]) {
        accum[current] = 0;
      } else {
        accum[current]++;
      }
      return accum;
    }, {})
  ).length;
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
  return str1.includes(str2);
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
