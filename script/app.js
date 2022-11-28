//Array para armazenar as tarefas
const tarefas = [];

const dashboard = document.getElementById('Dashboard');
dashboard.style.visibility = 'hidden';


// Função para adicionar uma nova tarefa ao array("tarefas")
  function TarefaNova(event) {
    var sizeTarefas = tarefas.length;

    var tarefa = document.getElementById("descricao").value;
    tarefas.push(tarefa); 

    //Criando o box da tarefa adicionada.
    const newDiv = document.createElement("div");
    newDiv.setAttribute('value', sizeTarefas);
    newDiv.setAttribute('class', 'box');
    newDiv.setAttribute('id', ('div'+sizeTarefas));

    const newTrash = document.createElement('img');
    newTrash.setAttribute('src','https://img.icons8.com/ios-glyphs/30/null/delete.png');


    //Definindo o descrição da tarefa
    const newP = document.createElement("p");
    newP.setAttribute('class', 'titulo');
    newP.setAttribute('id', ('p'+sizeTarefas));
    newP.innerText = tarefa;

    //Div para organizer os botões
    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute('value', sizeTarefas);
    buttonDiv.setAttribute('class', 'buttonsDiv');

    //Definindo o botão "Concluir" e suas propiedades
    const newButton = document.createElement('button');
    newButton.setAttribute('class', 'botaoBox');
    newButton.setAttribute('type', 'submit',);
    newButton.setAttribute('onclick', 'Concluir(value, id)');
    newButton.setAttribute('value', sizeTarefas);
    newButton.setAttribute('id', ('concluirBotao'+sizeTarefas));
    newButton.innerText = 'Concluir';

    //Definindo o botão "Deletar" e suas propiedades
    const delButton = document.createElement('button');
    delButton.setAttribute('class', 'delete');
    delButton.setAttribute('type', 'submit',);
    delButton.setAttribute('onclick', 'Deletar(value, id)');
    delButton.setAttribute('value', sizeTarefas);
    delButton.setAttribute('id', ('delBotao'+sizeTarefas));
    delButton.innerText = 'Deletar';


    dashboard.appendChild(newDiv);
    newDiv.appendChild(newP);
    newDiv.append(buttonDiv);
    buttonDiv.appendChild(delButton);
    buttonDiv.appendChild(newButton);

    document.getElementById("descricao").value = "";

    event.preventDefault();
  }

function showDashboard() {
        dashboard.style.visibility = 'visible';
}

function Concluir(posicao, id){
  child = document.getElementById(id);

  // Altera o estilo do título da tarefa
  document.getElementById('p'+posicao).style.textDecoration = "line-through";
  document.getElementById('p'+posicao).style.color = "green";
  child.remove();
  console.log(child);
}

function Deletar(posicao, id){
  tarefas.splice(posicao, posicao+1); 
  console.log(id)
  const child = document.getElementById(id);
  child.parentElement.parentElement.remove();
}

  const form = document.getElementById('form');

  form.addEventListener('submit', showDashboard);
  form.addEventListener('submit', TarefaNova);
 

  