var arr = [1, 5, 7, 9, 3, 6, 14, 92];
// var result = arr.find(function (value, index) {
//     return value === 9;
// })
// console.log(result);

// var result2=arr.findIndex(function (value,index) {
//     return value===9;
// })
// console.log(result2);

// Array find method implementation
function myFind(arr, cb) {
    for (var x = 0; x < arr.length; x++) {
        if (cb(arr[x])) {
            return arr[x];
        }
    }
}
var findArr = myFind(arr, function (value) {
    return value === 9;
})
console.log(findArr);
