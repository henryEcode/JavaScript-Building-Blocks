let firstName = "Olawale";
let lastName =  "Oyeleye";

let fullName = `${firstName} ${lastName}`

console.log(fullName)

//array destructuring
let students = ["Olawale","Ugochi","Cornelius","Vincent"];
let schools = ["Delsu","Ogun state Uni", "Madonna", "St. Paul"]

let age =[ 22,39,44,25,30]
let students1 = students[0];
let students2 = students[1];
let students3 = students[2];
//console.log(`student 1 is ${students1}, student 2 is ${students2}, student 3 is ${students3}`)

// Using spread with "...rest" keywords
let [studentA, studentB, studentC, ...rest ] = students;

console.log(studentA)
console.log(rest)



//first destructuring
    let item = [67,78];
//    let [a,b] = item
//     console.log(b,a)


//Second destructuring
    [item[0],item[1]] = [item[1],item[0]];
   // console.log(item)

    //1st Concatination of 2 arrays 
   // console.log(students.concat(schools))

    //2nd concatination of 2 arrays using spread "..."
    //console.log([...students, "apple","orange", ...schools])

    //destructuring Object

let studentObj = {
    Name: "Isreal",
    age:20,
    state: "Imo",
}


    //applying spread in a new object
//console.log(studentObj)
    let newObj = {...studentObj}
    console.log(newObj)
    studentObj.Name ="Jerry";
    console.log("updated studentobj", studentObj)
    console.log("updated newobj", newObj)

    // let X = "Cornelius"
    // let Y = 

    // console.log(X.slice(0, 5))
    // console.log(X.charAt(2))

    // schools.push = "Lead city"
    // console.log(schools)

    const post = {
        title:"This is my first post",
        author:{
            Name: "Vincent Shalom",
            location:{
                state:"Ogun",
                country:"Nigeria",


            }
        },
        views: 8,
        comments: [
            {title:"hello", content:"This is not correct"},
             {title:"I agree", content:"I agree 100%"}
        ]


    }

    let postAuthor = post["comments"][0]["content"]
    console.log(`${postAuthor} ${'but it can still pass'}`)
//Destructuring an Object and renaming keys in an object
    let {title: postTitle} = post

    console.log(postTitle)

    //functions and arrow functions => known as anonymous function
//normal function
    function display (origin, newname){
        let show = `Hello ${origin}!! welcome to class \n You are from ${newname} state`

        return show
    }
//anonymous function: here the keyword function is not used, instead we declare a variable, and assign the arrow function syntax to the variable. eg: const anotherthing = ()=>{}
  const anotherThing =  (origin, newname)=>{
let show = `Hello ${origin}!! welcome to class \n You are from ${newname} state`

        return show
    }
    console.log(anotherThing("Jerry", "Anambra"))


    //Higher order array methods
    //.map,forEach, reduce, find, filter
//.map
   let newSchool = schools.map((grown, i, u)=>{ return `${grown.toUpperCase()} is at position ${i+1} and ${u}`})

   //console.log(newSchool)
   //console.log(schools)

   let townRestaurant = ["Chicken republic","Kilimanjaro","Chicken Capitol","Mr. Biggs","Blooming chicken"]

   let [restaurant1,restaurant2,restaurant3, ...others] = townRestaurant

   let Bukka = [...others]

   console.log(restaurant1)
   console.log(Bukka)