// First Class Function
function add(a, b) {
    return a + b;
}
// A function can be Stored in a Variable
var addition = add;
console.log(addition(1, 1));

// A function can be Stored in an Array
var arr = [];
arr.push(add);
console.log(arr[0](1, 2));

// A function can be Stored in an Object
var obj = {
    sum: add
}
console.log(obj.sum(2, 2));

// We can create function as need
// We can pass function as an Arguments
// We can return functions from another function
