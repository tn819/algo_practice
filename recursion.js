//recursion
//call stack - LIFO - papers on a desk

//components of recursion: base, escape

const factorial = num => {
    if (num > 1) return num * factorial(num - 1);
    return 1;
};

//helper method recursion:
//store results to an array, invoke within function
function collectOddValues(arr) {
    let result = [];
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

//pure recursion:
// no nested structure

function collectPureOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) return newArr;
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

function fib(num) {
    while (num > 2) {
        return fib(num - 1) + fib(num - 2);
    }
    return 1;
}
//user slice, spread and concat to make copies
// strings are immutable so slice, substr, substring to make copies

function reverse(str) {
    // add whatever parameters you deem necessary - good luck!
    if (str.length === 1) return str[0];
    return (
        str.split("")[str.length - 1] +
        reverse(str.substring(0, str.length - 1))

        // mess around other way too: reverse(str.slice(1)) + str[0]
    );
}

function isPalindrome(str) {
    while (str.length > 1) {
        if (str.substring(0, 1) !== str.substring(str.length - 1, str.length))
            return false;
        return isPalindrome(str.substring(1, str.length - 1));
    }
    return true;
}
// Object.assign or spread operator for objects

//array of indefinitely nested arrays
function flatten(arr) {
    return arr.reduce((acc, currentValue) => {
        return acc.concat(
            Array.isArray(currentValue) ? flatten(currentValue) : currentValue
        );
    }, []);
}

//capitalize all strings in array
function capitalizeFirst(arr) {
    if (arr.length <= 1) return arr[0][0].toUpperCase() + arr[0].slice(1);
    return [].concat(
        arr[0][0].toUpperCase() + arr[0].slice(1),
        capitalizeFirst(arr.slice(1))
    );
}

function capitalizeWords(arr) {
    if (arr.length <= 1)
        return arr[0]
            .split("")
            .map(char => char.toUpperCase())
            .join("");
    return [].concat(
        arr[0]
            .split("")
            .map(char => char.toUpperCase())
            .join(""),
        capitalizeWords(arr.slice(1))
    );
}

/*
Sum up all nested even numbers in object,
var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};
*/
function nestedEvenSum(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}

//stringify all nested numbers in objects
function stringifyNumbers(obj) {
    let stringObj = Object.assign({}, obj);
    for (let key in stringObj) {
        if (typeof stringObj[key] === "number") {
            stringObj[key] = stringObj[key].toString();
        } else if (
            typeof stringObj[key] === "object" &&
            !Array.isArray(stringObj[key])
        ) {
            stringObj[key] = stringifyNumbers(stringObj[key]);
        }
    }
    return stringObj;
}

//returns all strings in an object, regardless of nesting

function collectStrings(obj) {
    let strings = [];
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            strings.push(obj[key]);
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            strings = strings.concat(collectStrings(obj[key]));
        }
    }
    return strings;
}
