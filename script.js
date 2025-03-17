// The New Key Word

// class Dog {
//     constructor(name, breed) {
//         this.name = name;
//         this.bree= breed;
//     }
//     bark() {
//         return "Woof!"
//     }
// }

// function Dog(name, breed) {
//     this.name = name;
//     this.breed = breed;
// }

// console.log(new Dog)

//calling the new function will create a new object


//PROTOTYPES Part 1

// class Dog {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//     }
//     bark() {
//         return "Woof!"
//     }
//     sleep(){
//         return `${this.name} is sleeping`
//     }
// }


// function Dog(name, breed) {
//     this.name = name;
//     this.breed = breed;
//     this.bark = function() {
//         return "Woof!"
//     };
//     this.sleep = function (){
//         return `${this.name} is sleeping`
//     }
// }

// const elton = new Dog('elton', 'aussie');

// console.log(elton.sleep())



//When an instance is added to a constructor, it is immediately added to the prototype which can be viewed with Object.__proto__


// function Dog(name, breed) {
//     this.name = name;
//     this.breed = breed;
// }

// Dog.prototype.bark = function() {
//     return "Woof!"
// };

// Dog.prototype.sleep = function (){
//     return `${this.name} is sleeping`
// }

// //PROTOTYPE chain

// const grandparents = {
//     greet() {
//         return 'hi'
//     }
// };

// const parent = {
//     color: 'purple',
//     sing() {
//         return 'lalala'
//     }
// }

// const child = {
//     num: 2,
//     __proto__: parent
// }

// console.log(child)


// Classes, inheritance and Prototypes


class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    bark() {
        return "Woof!"
    }
    sleep(){
        return `${this.name} is sleeping`
    }
}

class GuideDog extends Dog {
    constructor(name, breed, owner) {
        super(name, breed);
        this.owner = owner
    }
    alert() {
        return `${this.name} alerts you of danger`
    }
}

console.log(new GuideDog("Chaco", "Lab", "Maggie"))

//USEFUL PROTOTYPE METHODS

const person = {
    sing() {
        return "La La La";
    }, 
    isHuman: true
}

const tom = Object.create(person)

console.log(tom)

console.log(Object.getPrototypeOf(tom))
Object.setPrototypeOf(tom, {isHuman: false})

console.log(tom)