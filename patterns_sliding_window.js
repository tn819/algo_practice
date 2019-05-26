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


function minSubArrayLen(arr, int){
    let tempSum = 0;
    let segStart = 0;
    let segEnd = 0;
    let shortestSeg;
    
    if(arr.length < 1){
        return 0;
    }
    
    while(segEnd < arr.length){
        tempSum += arr[segStart];
        if (tempSum > int ){
            if (!shortestSeg || segEnd - segStart + 1 < shortestSeg){
                shortestSeg = segEnd - segStart + 1;
            } else if(tempSum - arr[segStart] >= int) {
                tempSum -= arr[segStart];
                segStart++;
                
            } else if (tempSum - arr[segStart] <= int) {
                segEnd ++;
                tempSum += arr[segEnd];
            }
        } else {
            segEnd ++;
            tempSum += arr[segEnd];
        }
    }
    
    return shortestSeg || 0;
}