const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list")




 function input(){
    let text = taskInput.value.trim();
    if (text !== ""){
        createTask(text)
        taskInput.value = '';

    }
 }
 
function createTask(text){

    const li = document.createElement("li");
    li.className = "task-item"
    const span = document.createElement("span")
    span.textContent = text;
    span.addEventListener('click',()=>{
        li.classList.toggle('completed')
    })

    const actions = document.createElement('div')
    actions.classList = "task-actions"
     const editBtn = document.createElement('Button')
     editBtn.innerHTML = '🖊️'
     editBtn.className = 'action-btn'
      editBtn.onclick = () => editTask(span);

     //editBtn.onclick = ()=>
       // editTask(span)
     

     const delBtn = document.createElement('Button')
     delBtn.innerHTML= '🗑️'
     delBtn.className = 'action-btn';
     delBtn.onclick = ()=> li.remove();

    //add event completed


    actions.appendChild(editBtn)
     actions.appendChild(delBtn)
li.appendChild(span)
li.appendChild(actions)

taskList.appendChild(li)

}

function editTask(span){
    const oldText = span.textContent;
    const input = document.createElement('Input')
    input.type = 'text';
    input.value = oldText;
    input.className = 'edit-input'
span.replaceWith(input)
    input.focus();


    input.addEventListener('blur', ()=>{
const newText = input.value.trim();
const newSpan = document.createElement('Span');
newSpan.textContent = newText || oldText;
newSpan.onclick = () => input.classList.toggle('completed')
input.replaceWith(newSpan)

    })
}



addBtn.addEventListener('click', input)