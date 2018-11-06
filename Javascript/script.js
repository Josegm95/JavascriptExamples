console.log('Hello World!');

//¡¡PROTOTYPE EXAMPLE!!
//create a new class with this constructor
function person(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
}

//Create an object of class person
jose = new person("Jose", 23, 123123);

//if I don´t use de keyword "prototype" persons created before this point can´t walk
person.prototype.walk = function () {
    console.log('walking');
};

jose.walk();

//----------------------------------------------------
//¡¡CLOUSER EXAMPLE!!
//A clouser is a function into another function. this can be used to simulate a private function
function addSquares(a , b) {
    function square(x) {
        return x**2;
    }

    return square(a) + square(b);
}

a = addSquares(2, 3);
console.log(a);
//Is not posible to use "square" since here
square(a); // error: square is not define