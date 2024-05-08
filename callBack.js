function simple(a, b, cb) {
    var c = a + b;
    var d = a - b;
    var result = cb(c, d);
    return result;
}
// SUMMATION
function sum(a, b) {
    return a + b;
}
console.log(simple(5, 8, sum));

// ABSTRACT
var result2 = simple(4, 3, function (c, d) {
    return c - d;
})
console.log(result2);

// MULTIPLY
var result3 = simple(5, 4, function (c, d) {
    return c * d;
})
console.log(result3);

// DIVIDED
var result4 = simple(5, 3, function (c, d) {
    return c / d;
})
console.log(result4);