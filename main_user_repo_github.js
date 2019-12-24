var input = document.querySelector("input[name=user]");
var button = document.querySelector("div#app button");
var ul = document.querySelector("div#app ul");

function getNameOnClick() {
    if (input.value !== "" && input.value !== null) {
        var baseUrl = `https://api.github.com/users/${input.value}/repos`;
        input.value = "";
        
        carregando();
        
        axios.get(baseUrl).then((result) => {
            setTimeout(function () {
                montarListaRepositorios(result);
            }, 5000);
        }).catch((err) => {
            console.error(err); 
        });
    }
}

function montarListaRepositorios(data) {

    ul.innerHTML = "";

    for (const iterator of data.data) {
        var li = document.createElement("li");
        var texto = document.createTextNode(iterator.full_name);
        
        li.appendChild(texto);
        ul.appendChild(li);
    }
}

function carregando() {
    ul.innerHTML = "";

    var li = document.createElement("li");
    var texto = document.createTextNode("Carregando...");

    li.appendChild(texto);
    ul.appendChild(li);
}

button.onclick = getNameOnClick;