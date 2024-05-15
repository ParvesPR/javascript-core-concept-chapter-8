var arr = [1, 2, 3, 4, 5]
var sqrArr = arr.map(function (value) {
    return value * value; /* Return square value */
})
console.log(arr);
console.log(sqrArr);

// Behind the scene map function
function myMap(arr, cb) {
    var newArr = [];
    for (var x = 0; x < arr.length; x++) {
        var temp = cb(arr[x])
        newArr.push(temp);
    }
    return newArr;
}
var qb = myMap(arr, function (value) {
    return value * value * value
})
console.log(qb);
var multiTen = myMap(arr, function (value) {
    return value * 10
})
console.log(multiTen);