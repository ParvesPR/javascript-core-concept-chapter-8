// Example of function composition
function print(input) {
    console.log(input);
}
function multiplyFive(num) {
    return num * 5;
}
function add(a, b) {
    return a + b;
}
print(multiplyFive(add(3, 5))) /* Combining multiple function */