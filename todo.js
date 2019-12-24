var input = document.querySelector("div#todo input");
var button = document.querySelector("div#todo button");
var ul = document.querySelector("div#todo ul");

var todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodo () {

    ul.innerHTML = "";

    for (const todo of todos) {
        
        var li = document.createElement("li");
        var texto = document.createTextNode(todo + " - ");
        var link = document.createElement("a");

        var numberLi = todos.indexOf(todo);

        link.textContent = "Excluir";
        link.setAttribute("href", "#");
        link.setAttribute("onclick", `excluirTodo('${numberLi}')`);

        li.appendChild(texto);
        li.appendChild(link);

        ul.appendChild(li);
    }
}

renderTodo();


function addTodo () {

    if (input.value !== "" && input.value !== null) {
        todos.push(input.value);
    }

    input.value = "";
    renderTodo();
    localStorage.setItem('todos', JSON.stringify(todos));
}

button.onclick = addTodo;

function excluirTodo (posicao) {
    todos.splice(posicao, 1);
    renderTodo();
    localStorage.setItem('todos', JSON.stringify(todos));
}