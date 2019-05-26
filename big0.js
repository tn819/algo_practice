//goal is to reduce complexity of algorithms, discuss trade-offs
//speed/memory comes at the expense of readability
function addUpTo(n){
    let total = 0;
    for (let i = 1; i <= n; i++){
        total+=i;
    }
    return total;
}

function alsoAddUpTo(n) {
    return n * ( n + 1 ) / 2;
}

//point in time testing - unreliable, not precise enough
var t1 = performance.now()
addUpTo(1000000000)
var t2 = performance.now()
console.log(t2-t1/1000);

/*
count operations
alsoAddUpTo - 3 operations
addUpTo - operations for n length and n assignments and n loop incrementation and n comparisons in loop

O(f(n))- number of simple operations needed is eventually less than constant * f(n)
- linear: f(n) = n, quadratic: f(n) = n^2, constant: f(n) = 1 for any constant
- O(log n)
- O(n logn)

addUpTo - O(1)
alsoAddUpTo - O(n) > ignore constant before // NOTE:
nested loop - O(n) * O(n) > O(n^2)
*/

// care about auxiliary space complexity - space required by algorithm, not inputs
//primitives are constant space
let primitives = [true, 194, undefined, null];
// string require O(n) space - n is string length
let string = "test".length;
//reference types : object/array are O(n)
let reference = [...array];
//only have two variables that cannot expand > O(1) space
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total;
}
//logarithms - inverse of exponentiation
//do not care about base - discussed without a base
// rule of thumb - low time complexity
// 3 areas of interest: 1) searching algos, 2) efficient sorting algos, 3) recursion

//objects - order not important, access/removal is fast
//insertion/removal/access - O(1), searching O(N) > hash tables
Object.keys, Object.entries, Object.values  = O(N)
Object.hasOwnProperty() = O(1)

//arrays - ordered lists, use other structures if order not important
array[0] - access - O(1);
array.filter() - searching - O(N);
array.push()/pop() - insertion/removal at end - O(1);
array.shift()/unshift() - insertion/removal at end - O(N);
array.concat() - O(N)
array.slice()/array.splice() - O(N)

array.sort() - O(N * log N)
forEach/map/filter/reduce - O(N)
