let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    //pegar o valor digitado no input
    let valorInput = input.value;

    //se não for vazio, nem nulo, nem indefinido
    if((valorInput !=="") && (valorInput !==null) && (valorInput!==undefined)){

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}"  class="material-icons">
                radio_button_unchecked
            </i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete">
                <i class="material-icons">
                    delete
                </i>
                Delete
            </button>
        </div>
    </div>`;

    //adicionar novo item no main
    main.innerHTML += novoItem;

    //zerar os campinhos
    input.value = "";
    input.focus();

    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe == "item"){
        item.classList.add('clickado');
    
    var icone = document.getElementById('icone_' + id);
    icone.classList.remove('radio_button_unchecked');
    icone.classList.add('item-clickado');
    
    item.parentNode.appendChild(item);

    }   else{
            item.classList.remove('clickado');
        
            var icone = document.getElementById('icone_' + id);
            icone.classList.remove('item-clickado');
            icone.classList.add('radio_button_unchecked');
        }

}

input.addEventListener("keyup", function(event){
    //se teclou enter(13)
    if (event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})