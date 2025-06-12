let acceptableAge = 18;
let voters = []

//let person1 = "Henry";
//let person2 = "Sonia"

const person1 = {
    name: 'Henry',
    age:15,
    state:'Imo',
    isAdult: true,
}
const person2 = {
    name: 'Olawale',
    age:25,
    state:'Oyo',
    isAdult: true,
}

//conditional statement using IF, else-if, and else
//if condition logic
 acceptableAge = 20;

if(person1.age>=18){
voters.push(person1)

}


voters.push(person2)

console.log('number of votes =', voters.length)
let voterNames = voters.map((voter) => voter.name).join(" and ");
console.log("the names of people that voted successfuly are", voterNames)
