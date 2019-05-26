// pointers or values that move towards beginning/middle/end as code progresses

//sumZero - accepts sorted array of integers,
//return first pair where sum is zero or undefined

//naive - time complexity O(N^2), space complexity O(N)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] + arr[i] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

//have pointer movement be driven by sumZero
//time complexity O(N), space complexity O(N)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  //failsafe for middle, not <=
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

//count unique values - counts unique array values
function countUniqueValues(arr) {
  let left = 0;
  let right = 1;
  if (arr.length === 0) {
    return 0;
  }
  let uniqueVal = 1;
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      uniqueVal++;
      left = right;
      right = left + 1;
      console.log(left, right);
    } else if (arr[left] === arr[right]) {
      right++;
    }
  }
  return uniqueVal;
}

//ideal solution - i moves forward incrementally, O(N) time
function countUniqueValues(arr) {
  let i = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

//are there areThereDuplicates
function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

//averagePair
function averagePair(arr, target) {
  if (arr.length < 2) {
    return false;
  }

  let start = 0;
  let next = arr.length - 1;

  while (start < arr.length - 1 && next > 0) {
    let tempAvg = (arr[start] + arr[next]) / 2;
    if (tempAvg === target) {
      return true;
    } else if (tempAvg > target) {
      next--;
    } else if (tempAvg < target) {
      start++;
    }
  }
  return false;
}

//isSubsequence('hello', 'helloworld') true
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
//recursive option is isSubsequence
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
