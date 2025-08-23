let items = ['H.R','Accounts','Admin','Marketing and Sales',]

let [itemsA,itemsB, ...others] = items

console.log(itemsA)
console.log(...others)

let company = {name: 'Fortafric',
    industry: 'Oil and gas',
    specialty: 'Engineering',
    Location: 'Abuja'
}

let newCompany = {...company}
newCompany.name = 'Greenwich';
newCompany.Location = 'Warri'
console.log(newCompany)

function Results(Remark, percent =20){
    let show = `The result is impressive with a high ${Remark} and ${percent}%`
    return show 
}

console.log(Results('average'))

let {name: rename, Location} = newCompany

console.log(rename)

let runemo = [1,2,3,4,5]

let dept = items.map((dept, d, g)=>{ return `${dept.toUpperCase()} is at position ${d + 1} and ${g}`})
console.log(dept)
let newNumber = runemo.find((classic)=>{ return classic / 2 === 1})
 
console.log(newNumber)

let newArr = items.filter((items) => {return items.length < 8})
console.log(newArr)