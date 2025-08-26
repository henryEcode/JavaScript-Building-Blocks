let btn = document.getElementById("btn");

let heading  = document.getElementsByTagName("h1")[0];
let second = document.getElementById("second-h1");
const grad = document.querySelector(".querry");


function changeStyle(){
    heading.style.color = "red";
    heading.innerText = "I just change this through DOM manipulation";
    second.classList.add("box-italics")
}

//window.alert(`Get me there`)
console.log(grad)
btn.addEventListener("click", changeStyle);