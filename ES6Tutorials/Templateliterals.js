let firstName = "Olawale";
let lastName =  "Oyeleye";

let fullName = `${firstName} ${lastName}`

console.log(fullName)

//array destructuring
let students = ["Olawale","Ugochi","Cornelius","Vincent"];

let students1 = students[0];
let students2 = students[1];
let students3 = students[2];
//console.log(`student 1 is ${students1}, student 2 is ${students2}, student 3 is ${students3}`)

// Using spread with "...rest" keywords
let [studentA, studentB, studentC, ...rest ] = students;

console.log(studentA)
console.log(rest)

//destructuring Object

let studentObj = {
    Name: "Isreal",
    age:20,
    state: "Imo",
}

//first destructuring
//     let item = [67,78];
//    let [a,b] = item
//     console.log(b,a)


//Second destructuring
    [item[0],item[1]] = [item[1],item[0]];
    console.log(item)