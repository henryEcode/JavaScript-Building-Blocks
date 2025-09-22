let people = [
{name:'Olawale', group: 1},
{name:'Favour', group: 2},
{name:'Henry', group: 1},
{name:'Jerry', group: 3},
{name:'Osas', group: 2},
{name:'Mary', group: 3},
]

let groups = []
console.log("before for loop")



//console.log(groups)
//console.log("After for loop")

const fetchData = ()=>{
return new Promise((resolve, reject) =>{
setTimeout(()=>{
    const success = false;
    success? resolve("Data loaded after being fulfilled") : reject("Error loading data");
}, 5000)

})

};

const fetchData2 = ()=>{
const inner = ()=>{
    setTimeout(()=>{
const success = true;
return success? "Data loaded": "Error loading data";

    }, 2000);

}

return inner()
}
//first async method
// fetchData().then((data)=>console.log(data)).catch((err)=>console.log(err))

//SECOND ASYNCRONIZATION method

async function main() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
let data = await response.json()
console.log(data)

    }catch(error){
        console.log(error)
    }
    
}

main()


// Third asynchronization method

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("error catching data", error))


for(let i=0; i<people.length; i++){
    if(!(groups.includes(people[i]["group"]))){groups.push(people[i]["group"])}

}

console.log(groups)
