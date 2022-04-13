/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  } else {
    return nums[0] * product(nums.slice(1,));
  }
};

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) {
    return words[0].length;
  } else {
    if (words[0].length > words[1].length) {
      return longest([words[0]].concat(words.slice(2,)));
    } else {
      return longest([words[1]].concat(words.slice(2,)));
    }
  }
};

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) {
    return str
  }
  return str[0] + everyOther(str.slice(2,));
};

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true
  } else if (str[0] != str[str.length-1]) {
    return false
  } else {
    return isPalindrome(str.slice(1,str.length-1));
  }
};

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) {
    return -1;
  } else if (arr[0] === val) {
    return 0
  } else {
    return findIndex(arr.slice(1,),val) === -1 ? -1 : 1 + findIndex(arr.slice(1,),val);
  }
};

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 1) {
    return str
  } else {
    return str[str.length -1] + revString(str.slice(1,str.length-1)) + str[0] ;
  }
};

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  if (Object.keys(obj).length === 0) {
    return []
  } else {
    let objectKeys = Object.keys(obj);
    let firstValue = obj[objectKeys[0]];
    delete obj[objectKeys[0]];
    if (typeof firstValue === 'object') {
      return gatherStrings(firstValue).concat(gatherStrings(obj));
    } else if (typeof firstValue === 'string') {
      return [firstValue].concat(gatherStrings(obj));
    } else {
      return gatherStrings(obj);
    }
  };
};

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  console.log(arr,val);
  if (arr.length === 0) {
    return -1
  } else if (arr[Math.floor(arr.length/2)] === val) {
    return Math.floor(arr.length/2);
  } else if (arr[Math.floor(arr.length/2)] > val) {
    let firstHalfSearch = binarySearch(arr.slice(0,Math.floor(arr.length/2)),val);
    if (firstHalfSearch === -1) {
      return -1
    } else {
      return firstHalfSearch
    };
  } else {
    let secondHalfSearch = binarySearch(arr.slice(Math.floor(arr.length/2)+1,),val);
    if (secondHalfSearch === -1) {
      return -1
    } else {
      return secondHalfSearch + Math.floor(arr.length/2) + 1
    }
  }
};

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
