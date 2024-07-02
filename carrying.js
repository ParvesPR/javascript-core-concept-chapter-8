// Example of carrying function
function carrying(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
var result = carrying(10)(10)(5);
console.log(result);