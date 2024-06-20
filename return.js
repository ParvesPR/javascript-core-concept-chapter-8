function greet(msg) {
    function greeting(name) {
        return msg + ',' + name + '!'
    }
    return greeting;
}
var gm = greet('Good Morning')
var gn = greet('Good Night')
var msg = gm('Hello Parves')
console.log(msg);

// Power number with returning function
function base(bn) {
    var result = 1;
    function pow(n) {
        for (var x = 0; x < bn; x++) {
            result *= n;
        }
        return result;
    }
    return pow;
}
var base10 = base(10);
console.log(base10(2));
var base5 = base(5);
console.log(base5(2));