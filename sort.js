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
var arr = [1, 5, 7, 9, 3, 6, 4, 2, 7, 9, 5];
arr.sort()
console.log(arr);
person.sort();
console.log(person);

// Ascending order sorting
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

// Ascending order sorting object
person.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    }
    else if (a.age < b.age) {
        return -1
    }
    else {
        return 0;
    }
})
console.log(person);

// Every method (execute when all values match logic)
var result1 = arr.every(function (value) {
    return value % 2 === 0; /* return true if all values are even number */
})
console.log(result1);

var result2 = arr.every(function (value) {
    return value % 2 === 1; /* return true if all values are odd number */
})
console.log(result2);
