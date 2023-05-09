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

    lists.forEach((list, index) => {

        let li = document.createElement("li");
        //li.append("<li><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox'/>" + list + "<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i></li>");
        //<input class="form-check-input" type="checkbox"><label class="form-check-label">list</label></div>
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = index;
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(' '));
        li.appendChild(document.createTextNode(list));
        todo_list.appendChild(li);

        let _checkbox = document.getElementById(checkbox.id);
        //console.log(_checkbox);
        _checkbox.addEventListener("change",function_1);

    });

    localStorage.setItem("key-todo", JSON.stringify(lists));
    //localStorage.setItem("key-todo", lists);
}

const function_1 = () => {
    alert("done");
}

console.log(localStorage.getItem("key-todo"));
console.log(lists);

btn_submit.addEventListener("click",submit);
