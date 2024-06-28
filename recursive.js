function sayHello(n) {
    if (n == 0) {
        return;
    }
    console.log('Say Hello');
    sayHello(n - 1);
}
sayHello(10);
