//Array para armazenar as tarefas
const tarefas = [];

//Recebe "Dashboard" e define como oculto
const dashboard = document.getElementById('Dashboard');
dashboard.style.visibility = 'hidden';

//Recebe "form" 
const form = document.getElementById('form');


// Função para adicionar uma nova tarefa ao array("tarefas")
function TarefaNova(event) {

  //verifica o quantidade de tarefas existentes
  var sizeTarefas = tarefas.length;

  //atribui a descrição da tarefa a var e adiciona ao array
  var tarefa = document.getElementById("descricao").value;
  tarefas.push(tarefa); 

  //Criando um layout para exibir a tarefa na lista do "Dashboard"
  const newDiv = document.createElement("div");
  newDiv.setAttribute('value', sizeTarefas);
  newDiv.setAttribute('class', 'box');
  newDiv.setAttribute('id', ('div'+sizeTarefas));

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

  // inserindo os elementos criados a "Dashboard"
  dashboard.appendChild(newDiv);
  newDiv.appendChild(newP);
  newDiv.append(buttonDiv);
  buttonDiv.appendChild(delButton);
  buttonDiv.appendChild(newButton);


  // altera o valor do campo "descricao" para vazio novamento
  document.getElementById("descricao").value = "";

  event.preventDefault();
}

function showDashboard() {
        dashboard.style.visibility = 'visible';
}

//Função para concluir uma "tarefa" específica
function Concluir(posicao, id){

  child = document.getElementById(id);

  // Altera o estilo do título da tarefa
  document.getElementById('p'+posicao).style.textDecoration = "line-through";
  document.getElementById('p'+posicao).style.color = "green";
  child.remove();
  console.log(child);
}

//Função para excluir uma "tarefa" específica
function Deletar(posicao, id){
  //remove o elemento do array "tarefas"
  tarefas.splice(posicao, posicao+1); 

  //remove a "tarefa" da lista de exibição
  const child = document.getElementById(id);
  child.parentElement.parentElement.remove();
}

//eventos criados para exibir as tarefas na tela, após confirmar no botão.
form.addEventListener('submit', TarefaNova);
form.addEventListener('submit', showDashboard);
  
 

  