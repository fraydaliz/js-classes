'use strict'


function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const jessica = new Person("jessica", 30);

jessica.greet()


// Class 

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    haveBirthday() {
        this.age += 1;
        console.log(`Happy Birthday, ${this.name}! You are now ${this.age} years old.`);
    }

}


const Mary = new Person2("Mary", 30);


Mary.greet(); 
Mary.haveBirthday();