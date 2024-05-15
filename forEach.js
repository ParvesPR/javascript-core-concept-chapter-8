var arr = [1, 2, 3, 4, 5];
var sum = 0;
// TRAVERSE AN ARRAY USING FOREACH  FUNCTION
// arr.forEach(function (value, index, arr) {
//     console.log(value, index, arr);
//     sum += value;
// })
// console.log(sum);

// BEHIND THE SCENE FOREACH FUNCTION
function forEach(arr, cb) {
    for (var x = 0; x < arr.length; x++) {
        cb(arr[x], x, arr)
    }
}
var sum = 0;
forEach(arr, function (value, index, arr) {
    console.log(value, index, arr);
    sum += value;
})
console.log(sum);

// FIVE WILL BE ADDED TO EACH VALUE
forEach(arr, function (value, index, arr) {
    arr[index] = value + 5;
})
console.log(arr);
