//break data set into smaller chunks, repeat process with subset of data
// sorting algorithms are divide and conquer - a bit more advanced
//search([1,2,3,4,5,6],4)

//naive O(N) >
function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

//binary search - time complexity Log(N)
function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}
