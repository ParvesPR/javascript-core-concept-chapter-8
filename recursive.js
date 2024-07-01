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