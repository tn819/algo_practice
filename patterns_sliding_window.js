//pattern involves creating a window either an array or number from one position to another
//window either increases or closes > creating new array
//keep track of a subset of data

//unique character string
// "hellothere" > lother

function uniqueString(str) {}

//maxSubarraySum([1,2,4,2,8,1,5],2) > 10

// naive solution - time complexity = O(N^2) - nested loop, space complexity = O(N)

function maxSubarraySum(arr, segment) {
    if (num > arr.length) {
        return null;
    }
    // note use of -Infinity +Infinity to deal with edge cases
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length - segment + 1; i++) {
        let intSum = 0;
        //realistically don't care about complexity within larger array, just at subarray level reaching appropriate length
        for (let j = 0; j < segment; j++) {
            intSum += arr[i + j];
        }
        if (intSum > maxSum) {
            maxSum = intSum;
        }
    }
    return maxSum;
}

//O(N) - time complexity, one loop not nested
function maxSubarraySum(arr, segment) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < segment) {
        return null;
    }
    //slide window and create new sum value
    for (let i = 0; i < segment; i++) {
        maxSum += arr[i];
    }
    //assign this value to maximum sum
    tempSum = maxSum;

    //slide window and update value subtracting first element and adding last element
    for (let i = segment; i < arr.length; i++) {
        tempSum = tempSum - arr[i - segment] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

//check minimum length of a subarray that exceeds a provided integer value
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then
        // move the window to right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

//check longest string

function findLongestSubstring(string) {
    if (string.length === 0) {
        return 0;
    } else if (string.length === 1) {
        return 1;
    }
    let resultArray = [];
    let resultLength = 0;
    let firstPointer = 0;
    let secondPointer = 1;
    while (secondPointer <= string.length) {
        resultArray = string.split("").slice(firstPointer, secondPointer);
        resultArray.length > resultLength
            ? (resultLength = resultArray.length)
            : null;
        if (resultArray.indexOf(string[secondPointer]) == -1) {
            secondPointer++;
        } else {
            firstPointer += resultArray.indexOf(string[secondPointer]) + 1;
            secondPointer++;
        }
    }
    return resultLength;
}
