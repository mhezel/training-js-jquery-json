let input = document.querySelector("#input-text"); //input text
let btn_submit = document.querySelector("#btn-submit"); // button add
let todo_list = document.querySelector("#todo-list"); // ul list

let lists = [];

if (localStorage.getItem("key-todo")){
    lists = JSON.parse(localStorage.getItem("key-todo"));
}

const submit = () => {
    lists.push(input.value);

    todo_list.innerHTML="";

    lists.forEach((list) => {

        let li = document.createElement("li");
        li.appendChild(document.createTextNode(list));
        todo_list.appendChild(li);

    });

    localStorage.setItem("key-todo", JSON.stringify(lists));
    //localStorage.setItem("key-todo", lists);
}
console.log(localStorage.getItem("key-todo"));
console.log(lists);
btn_submit.addEventListener("click",submit);