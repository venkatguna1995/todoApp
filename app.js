// const form = document.getElementById("form")
// const name = document.getElementById("name")
// const email = document.getElementById("email")
// const tel = document.getElementById("tel")
// const password = document.getElementById("password")
// const submit = document.getElementById("submit")

// form.addEventListener("submit", (e) =>{
//     if(!name.value || !isNaN(name.value)){
//         e.preventDefault();
//         alert("please enter valid name")
//         return false
//     }
//     if(!email.value){
//         e.preventDefault();
//         alert("please enter valid email")
//         return false
//     }

//     if((!tel.value || (tel.value.length < 10 || tel.value.length > 10))){
//         e.preventDefault();
//         alert("please enter valid phone number")
//         return false
//     }

//     if(!password.value && password.value.length > 5){
//         e.preventDefault()
//         alert("Please enter the password and greater than 5 digits")
//         return false
//     }
// })

const form = document.querySelector("#addTask");
const input = document.querySelector("#input");
const todo = document.querySelector(".todo")
// const todoList =  document.querySelector(".todolist")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var data = input.value
    if(!data){
        alert("Please Enter Task")
        input.focus()
        return
    }

    const task = document.createElement('div');
    task.classList.add("task");

    const inputs = document.createElement("input");
    inputs.classList.add("text");
    inputs.value = data;
    inputs.setAttribute('readonly','readonly');
    inputs.type="text"
    
    const actions = document.createElement('div');
    actions.classList.add("todolist");

    const edit  = document.createElement("button");
    edit.classList.add('button1');
    edit.innerHTML = "Edit"

    const delet = document.createElement("button");
    delet.classList.add("button2")
    delet.innerHTML = "Delete"

    task.appendChild(inputs)
    todo.appendChild(task)
    actions.appendChild(edit)
    actions.appendChild(delet)
    todo.appendChild(actions)
    
    document.getElementById("input").value = "";


    // Edit User Data

    edit.addEventListener('click', () => {
        if(edit.innerHTML == "Edit"){
            inputs.removeAttribute('readonly');
            inputs.focus();
            edit.innerHTML = "Save"
        }else{
            inputs.setAttribute('readonly','readonly');
            edit.innerHTML = "Edit"
        }
    })

    // Delete User Data

    delet.addEventListener("click", () => {
        if(delet.innerHTML == "Delete"){
            todo.removeChild(task)
            todo.removeChild(actions)
        }

    })

});
