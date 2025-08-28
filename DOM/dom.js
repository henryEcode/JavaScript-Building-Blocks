let btn = document.getElementById("btn");

let heading  = document.getElementsByTagName("h1")[0];
let second = document.getElementById("second-h1");
const grad = document.querySelector(".querry");
let container = document.querySelector(".container")


function changeStyle(){
    heading.style.color = "red";
    heading.innerText = "I just change this through DOM manipulation";
    second.classList.add("box-italics")
}

function addElem(){
    const addEle = document.createElement('p');
    addEle.innerText = "We are outside";
    container.appendChild(addEle)

}

 setTimeout(()=>{console.log(`this will run after 10 seconds`)},2000)
  setInterval(()=>{console.log(`this will run after 10 seconds`)},4000)
 
function remElem(){
 
   document.body.removeChild(container)
}

//window.alert(`Get me there`)
console.log('body text:',document.body.innerText)
btn.addEventListener("click", changeStyle);
btn2.addEventListener('click', remElem)