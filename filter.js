var arr = [1, 5, 8, 9, 4, 6, 4, 3];
var simple = arr.filter(function (value) {
    if (value % 2 == 1) {
        return value;
    }
})
console.log(simple);