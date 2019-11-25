function sum(a, b) {
    return a + b
}

// Arrow function 

let sum2 = (a, b) => a + b

//
function isPositive(number) {
    return number >= 0
}

// Arrow function

let isPostive2 = number => number >= 0

//
function randomNumber() {
    return Math.random
}

// Arrow Function

let randomNumber2 = () => Math.random 

// 
document.addEventListener('click', function() {
    console.log('Click')
})

// Arrow Function 

document.addEventListener('click', () => console.log('Click'))


class Person {
    constructor(name) {
        this.name = name
    }

    printNameArrow(){
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }

}

let person = new Person('Bob')
// the method below will print the persons name, this works like normal java
// "this" can be used inside the class methods and works like java
person.printNameArrow()
// the method called below has the same scope as the method that is 
// here and not the scope of the method that is inside the class and won't 
// print the persons name (Global scope)
person.printNameFunction()
// this.name will also print blank 
