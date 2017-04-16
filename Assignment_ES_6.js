// part 1 of ES6 assignment
function person(name) {
    this.name = name;
}
person.prototype.prefixArray = function(arr) {
    return arr.map((character) => {
        return this.name + character;
    });
};


// part 2 of ES6 assignment

let obj = { first: 'Jane', last: 'Doe', dob: '1/7/1992' };
let { first: f, last: l, dob: d } = obj;
f = 'Jane';
l = 'Doe';
console.log(f, l, d);

// {prop} is short for {prop: prop}
let { first, last } = obj;
first = 'Jane';
last = 'Doe', dob = '1/7/1992';
console.log(first, last, dob);

// part 3 of ES6 assignment

var foo = [1, 2, 3];
var [one, two, three] = foo;
// one => 1, two => 2, three => 3

var { a, b } = { a: 1, b: 2 };
// a => 1, b => 2

// part 4 of ES6 assignment


(function() {
    let food = 'Meow Mix';
})();
console.log(food);
