var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce(function (prev, curr, value, index) {
    return prev + curr;
})
console.log(sum);