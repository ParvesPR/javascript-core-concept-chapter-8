var person = [
    {
        "name": 'A',
        "age": '20',
    },
    {
        "name": 'D',
        "age": '26',
    },
    {
        "name": 'E',
        "age": '19',
    },
    {
        "name": 'C',
        "age": '23',
    },
]
var arr = [1, 5, 7, 9, 3, 6, 4, 2, 17, 9, 5];
arr.sort()
console.log(arr);
person.sort();
console.log(person);

arr.sort(function (a, b) {

    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    else {
        return 0;
    }
})
console.log(arr);