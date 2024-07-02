function sayHello(n) {
    if (n == 0) {
        return;
    }
    console.log('Say Hello');
    sayHello(n - 1);
}
sayHello(10);

// Summation using recursive function
function sum(n) {
    if (n == 1) {
        return 1;
    }
    return n + sum(n - 1);
}
console.log(sum(5));

// Factorial using recursive
function facto(n) {
    if (n == 1) {
        return 1;
    }
    return n * facto(n - 1)
}
console.log(facto(5));

// Summation an array
var arr = [1, 2, 3, 4, 5];
function sumArr(arr, lastIndex) {
    if (lastIndex < 0) {
        return 0;
    }
    return arr[lastIndex] + sumArr(arr, lastIndex - 1);
}
var result = sumArr(arr, arr.length - 1)
console.log(result);