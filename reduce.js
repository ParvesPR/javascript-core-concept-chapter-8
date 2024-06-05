var arr = [13, 1, 2, 4, 5];
// Build in reduce method
// var sum = arr.reduce(function (prev, curr, value, index) {
//     return prev + curr;
// }, 10)
// console.log(sum);

// var max = arr.reduce(function (prev, curr) {
//     return Math.max(prev, curr)
// })
// console.log(max);

// Reduce method implementation
function myReduce(arr, cb, accu) {
    for (var x = 0; x < arr.length; x++) {
        accu = cb(accu, arr[x])
    }
    return accu;
}
// Summation array value
var sum = myReduce(arr, function (prev, curr) {
    return prev + curr
}, 0)
console.log(sum);

// Find the max value
var max = myReduce(arr, function (prev, curr) {
    return Math.max(prev, curr)
}, 0)
console.log(max);

// Find minimum value
var min = myReduce(arr, function (prev, curr) {
    return Math.min(prev, curr)
}, arr[0])
console.log(min);