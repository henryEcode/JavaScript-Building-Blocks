const person = {
    name: 'Henry',
    age:20,
    state:'Imo',
    isAdult: true,
}

delete person['name']

let nameOfPerson = person['name'];
let ageOfPerson = person.age;
console.log('Name of person 1 is', nameOfPerson)
console.log('Age of person 1 is', ageOfPerson)

person.state = 'Cross-river'
console.log(person)