function add(a, b) {
    return a + b;
}

function manipulate(a, b, fun) {
    var c = a + b;
    var d = a - b;

    function multiply() {
        var m = fun(a, b)
        return c * d * m;
    }
    return multiply;
}
var num = manipulate(4, 3, add);
console.log(num());