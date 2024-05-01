var a = 10;
function func() {
    var x = 5;
    return function () {
        console.log(x); /* Closure */
    }
}
var ab=func();
console.dir(ab);
