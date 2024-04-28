// PURE FUNCTION
/* 
1. Return the same result if given the same arguments
2.Does not have any side effect.
*/

//Pure function
function sqr(n) {
    return n * n;
}
console.log(sqr(3));
console.log(sqr(3));
console.log(sqr(2));

// Not a pure function
var n = 10;
function change() {
    return n = 100
}
change();
console.log(n);

var point = {
    x: 10,
    y: 20,
}
function printPoint(number) {
    number.x = 20; /* Replace the point variable value */
    number.y = 30; /* Replace the point variable value */
    console.log(number);
}
printPoint(point) /* Pass point variable */
