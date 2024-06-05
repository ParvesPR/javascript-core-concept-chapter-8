var arr = [1, 5, 8, 9, 4, 6, 4, 3];
// var simple = arr.filter(function (value) {
//     if (value % 2 == 1) {
//         return value;
//     }
// })
// Behind the scene
function filtered(arr, cb) {
    var newArr = [];
    for (var x = 0; x < arr.length; x++) {
        if (cb(arr[x], x)) {
            newArr.push(arr[x])
        }
    }
    return newArr
}
// Filter odd number
var result = filtered(arr, function (value) {
    return value % 2 == 1
});
// filter even number
var result2 = filtered(arr, function (value) {
    return value % 2 == 0
});
console.log(result);
console.log(result2);