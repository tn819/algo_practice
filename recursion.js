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

function collectOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) return newArr;
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
