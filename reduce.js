var arr = [1, 2, 13, 4, 5];
var sum = arr.reduce(function (prev, curr, value, index) {
    return prev + curr;
}, 10)
console.log(sum);

var max = arr.reduce(function (prev, curr) {
    return Math.max(prev, curr)
})
console.log(max);