let schoolName = ["Corona", "FGC","Command day","Kings college","ISL","CKC"]

let [school1, school2, school3,...others] = schoolName

console.log(school1)
console.log(others)

function newSchool (schoolname, years){
let currentSchool = `the ${schoolname} has stayed for a while \n probably ${years} years`



return currentSchool

}
console.log(newSchool(schoolName[0],20))

const a_list_school = (schoolname, years)=>{
    let space = `the ${schoolname} has stayed for a while \n probably ${years} years`
    return space
}

console.log(a_list_school(schoolName[3],15))

let annex = schoolName.map((strong, u, d)=>{return `the school name is ${strong} it is rated ${u+1} with ${d}`})

console.log(annex)

let oldSchool = schoolName.filter((schoolName)=>{return schoolName.length === 3})

console.log(oldSchool)