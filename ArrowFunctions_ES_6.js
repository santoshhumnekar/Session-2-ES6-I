/**
 * Arrow Function in ES6
 */

/* ========================================================= */

/**
 * Problem Statement - example
 */

function Person(name) {
    this.name = name;
}
Person.prototype.prefixName = function(arr) {
    return arr.map(function(character) {
        return this.name + character;
    }, this);
};


/**
 *  Defined funtion using ES6
 */

function Person(name) {
    this.name = name;
    showName.onclick = (event) => {
        printName(that.name);
    }
}