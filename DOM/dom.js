let btn = document.getElementById("btn");

let heading  = document.getElementsByTagName("h1")[0];

function changeStyle(){
    heading.style.color = "red";
}

console.log(btn)
btn.addEventListener("click", changeStyle);