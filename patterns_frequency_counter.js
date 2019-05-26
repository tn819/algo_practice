// frequency counters
//avoid need for nested loops, of O(N^2) string/array operations
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    //indexOf is essentially a nested loop - O(N^2)
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

//use a couple frequency counters instead

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    // 3 loops through array/object of similar length so O(N)
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

//anagrams examples

function anagram(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    // 3 loops through array/object of similar length so O(N)
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

//anagrams implementation - jumbled words

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    for (let i = 0; i < str1.length; i++) {
        let letter = str.charAt(i);
        frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!frequencyCounter1[letter]) {
            return false;
        } else {
            frequencyCounter1[letter] -= 1;
        }
    }
    return true;
}

//same Frequency - given two positive integers, find out if two numbers have same frequency of digits
function sameFrequency(num1, num2) {
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    num1 = num1.toString().split("");
    num2 = num2.toString().split("");

    if (num1.length !== num2.length) {
        return false;
    }

    for (let i = 0; i < num1.length; i++) {
        let key1 = num1[i];
        frequencyCounter1[key1] = (frequencyCounter1[key1] || 0) + 1;
    }
    for (let i = 0; i < num2.length; i++) {
        let key2 = num2[i];
        frequencyCounter2[key2] = (frequencyCounter2[key2] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

//unspecified duplicates array
function areThereDuplicates() {
    let frequencyCounter = {};

    for (let val in arguments) {
        frequencyCounter[arguments[val]] =
            (frequencyCounter[arguments[val]] || 0) + 1;
    }
    for (let key in frequencyCounter) {
        if (frequencyCounter[arguments[val]] > 1) {
            return true;
        }
    }
    return false;
}
