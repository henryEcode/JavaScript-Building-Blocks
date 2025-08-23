//OBJECT ORIENTED JAVASCRIPT
//an object is an instance of a class
//OOP is reusable , scalable and easily debug
//class removes repition in programming

//Pillars of OOP is polymorphism, abstraction, inheritance, Encapsulation.

// using "This" keyword in the object. 

const person = {
    name:"Alice",
    age:25,
    hobbies:['Singing','Dance','Cooking'],
    compliments:function (){
     return `Hello, my name is ${this.name} and I am ${this.age}`
    }

};



let hobbies1 = person.hobbies[0]

const outcome = person.compliments()
console.log(outcome)
console.log(hobbies1)

//constructor function
function animal(name, age){
    this.name = name
    this.age = age

     function walk (henry){
        return `${this.name} is walking`

    }
    return walk()
}

console.log(animal('henry', 20))

//CLASSES classes are blueprints for creating objects instances. 'class' is a reserved keyword in JavaScript

//there are 2 types of properties. 1 Instances property 2. Global property. So whenever we use this keyword it refers to the instance of the person. 

class person2 {
    constructor(name, state){

        this.name = name
        this.state = state
        //this.index = 0
        //this.item = []
    }

    hello(){
        return 'hello'
    }

    push(items){
        this.item[this.index]= items
        this.index++

        return this.item
    }

    
}

const vincent = new person2('vincent', 20)
const Ugo = new person2('Ugonna', 20)
//const ikenna = new person2('B.sc','M.sc')


console.log( Ugo.hello(),`My name is`,Ugo.name)
//console.log(ikenna.push('B.sc','M.sc'))
//console.log(ikenna.push('M.sc'))
//any function inside a class is a method
// when using a constructor in a class, the keyword 'new'

class admin{
    // constructor(name, state){
    //     this.name = name
    //     this.state = state
       

    // }

     hello(){
        return 'hello'
    }

    // push(items){
    //     this.item[this.index]= items

    //     return this.item
    // }

    createuser(name, state){
        const user = new person2 (name, state)
        return user
    }
}
const Chioma = new admin()
console.log(Chioma)
console.log(Chioma.createuser('Chima',"Bauchi"))
console.log(Chioma.hello())