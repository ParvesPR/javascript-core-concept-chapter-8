function greet(msg) {
    function greeting(name) {
        return msg + ','+ name + '!'
    }
    return greeting;
}
var gm=greet('Good Morning')
var gn=greet('Good Night')
var msg=gm('Hello Parves')
console.log(msg);