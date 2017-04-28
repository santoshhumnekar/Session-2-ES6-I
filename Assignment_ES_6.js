//--------------------------------------------------------------------------------------------------------------------------------------------

function Person(name) {
    this.name = name;
}
Person.prototype.prefixName = function(arr) {
    return arr.map((character) => {

        return this.name + character; //"function " and use fat arrow => refer to example 
    }, this);
};

let pers1 = new Person("John");
pers1.prefixName(["Lucas"])

//-------------------------------------------------------------------------------------------------------------------------------------------

let obj = { Firstname: 'John', Lastname: 'Petrucci', Dateofbirth: '12-07-1967' }

let { Firstname: fname, Lastname: lname, Dateofbirth: dob } = obj; // 2. Create Object destructuring.

var printdestructuredobj = (() => {
    console.log(`Firstname ${fname} Dateofbirth ${dob}`)
});

printdestructuredobj();

//---------------------------------------------------------------------------------------------------------------------------------------------------

//3.  Create Array destructuring.
let foo = ['Araya', 'Dimebag', 'Randy'];
let [one, two, three] = foo;

let printdestructuredArray = (() => {
    console.log(one);
    console.log(two);
    console.log(three);
});
printdestructuredArray();

//---------------------------------------------------------------------------------------------------------------------------------------------------

//4. Replace IIFEs with Blocks

((someFunction) => {
    food = 'Meow Mix';
    console.log(food)
})();
food = 'Cat guts';
console.log(food)

//---------------------------------------------------------------------------------------------------------------------------------------------------
