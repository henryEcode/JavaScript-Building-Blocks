let acceptableAge = 18;
let voters = []
let nonAccredited = []
let underAge = []
let totalNumber = []
let totalNumberofVoters = ['person1','person2','person3']

//let person1 = "Henry";
//let person2 = "Sonia"

const person1 = {
    name: 'Henry',
    age:25,
    state:'Imo',
    isAdult: true,
    voterId:true,
}
const person2 = {
    name: 'Olawale',
    age:25,
    state:'Oyo',
    isAdult: true,
    voterId:false,
}
const person3 = {
    name: 'Jerry',
    age:15,
    state:'Yobe',
    isAdult: false,
    voterId:false,
}

//totalNumberofVoters = totalNumber.push('person1', 'Person2', 'Person3')

//conditional statement using IF, else-if, and else
//if condition logic
 acceptableAge = 20;

if(person1.age>=acceptableAge && person1.voterId){
voters.push(person1)

}
else if(person1.age<=acceptableAge){
underAge.push(person1)
}
else{
    nonAccredited.push(person1)
     
}
if(person2.age>=acceptableAge && person2.voterId){
voters.push(person2)

}
else if(person2.age<=acceptableAge){
underAge.push(person2)
}
else{
    nonAccredited.push(person2)
     
}

if(person3.age>=acceptableAge && person3.voterId){
voters.push(person3)
}
else if(person3.age<acceptableAge){
underAge.push(person3)
}
else{
    nonAccredited.push(person3)
     
}


//voters.push(person2)

console.log('number of Valid votes =', voters.length)
let voterNames = voters.map((voter) => voter.name).join(" and ");
console.log("the names of people that voted successfuly are", voterNames)
console.log("number of non accredited voters = ", nonAccredited.length)
console.log("Number of Underage Voters =", underAge.length)
console.log("Total number of voters =", totalNumberofVoters.length )


///Case Statement

let color = 'indigo';

switch (color){
    case 'red':console.log('color is red')
    break
     case 'indigo':console.log('color is blue')
    break
    case 'green':console.log('color is green')
    break
    default: console.log('Invalid color')


}

//Itirations with "for loop", where you would want an instruction to run for a parrticular number of time

// for(let i =0; i<=10; i++){
//     console.log("I am running in a for loop", i)
// }

let myArr = [1,3,5,7,9,11,14]


// for( z =0; z<myArr.length;z++){
//     console.log("I am doing sums in for loop", z)
//     sum = sum + myArr[z]
// }
let sum = 0

// for(let y=0; y<myArr.length; y++){
// sum = sum + myArr[y]
// }
// console.log(sum)


for(let i = 0; i<=myArr.length; i++){
let result = "the index of"  + myArr[i] +'is'+ i;
    console.log(result)
}

console.log(myArr[0])

//Use of (For in) and (for of)
//(for in) returns the index in an array or keys in an object while (for of) returns the value in an array/object.

for(let val of myArr){
    console.log(val)
}
for(let index in myArr){
    console.log(index)
}

///while loop
 let counter = 0;

// while (counter<10){
   
//     console.log("running", counter)
//       counter ++
   
    
// }

//Break statement using if statement in whileloop

// while (counter<10){
// if (counter === 6){
//  break
// }
//     console.log("running" , counter)
//     counter ++
// }

//Continue statement using if statement in whileloop

// while( counter <10){
      

//     if(counter === 6){
//         counter++
//         continue
//     }

//     console.log("printing", counter)
//     counter++

//}

do{
    if (counter === 6){
        counter++
        continue
    }
    console.log('printing', counter)
} while(counter<0)