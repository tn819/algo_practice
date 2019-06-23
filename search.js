//linear search - brute force
// indexOf, includes, find, findIndex

//binary search - sorted resultArray
//time complexity: O(log n) worst and average, O(1) best case

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (left <= right && arr[mid] !== val) {
        mid = Math.floor((left + right) / 2);
        if (val > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return arr[mid] === val ? mid : -1;
}

//naive search
//O(M * n) - M str, N substr
function naiveSearch(str, substr) {
    let match = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < substr.length; j++) {
            if (str[i + j] !== substr[j]) break;
            if (j === substr.length - 1) match++;
        }
    }
    return match;
}

//KMP string searching
// O(M + n)
function kmpSearch(pattern, text) {
    if (pattern.length == 0) return 0; // Immediate match

    // Compute longest suffix-prefix table
    var lsp = [0]; // Base case
    for (var i = 1; i < pattern.length; i++) {
        var j = lsp[i - 1]; // Start by assuming we're extending the previous LSP
        while (j > 0 && pattern.charAt(i) != pattern.charAt(j)) j = lsp[j - 1];
        if (pattern.charAt(i) == pattern.charAt(j)) j++;
        lsp.push(j);
    }

    // Walk through text string
    var j = 0; // Number of chars matched in pattern
    for (var i = 0; i < text.length; i++) {
        while (j > 0 && text.charAt(i) != pattern.charAt(j)) j = lsp[j - 1]; // Fall back in the pattern
        if (text.charAt(i) == pattern.charAt(j)) {
            j++; // Next char matched, increment position
            if (j == pattern.length) return i - (j - 1);
        }
    }
    return -1; // Not found
}
