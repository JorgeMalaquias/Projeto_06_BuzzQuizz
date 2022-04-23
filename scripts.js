


let quizzes = [];
const divtodosQuizzes = document.querySelector(".corpo").querySelector(".todosQuizzes");
const API = "https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes";

/*
/*funções*/

function pegarListaQuizes(){
  const promise = axios.get(API)
  promise.then(carregarQuizz)
}
function carregarQuizz(response){
  quizzes = response.data;
  renderizarQuizzes(divtodosQuizzes)
}
function renderizarQuizzes(divtodosQuizzes){
  divtodosQuizzes.innerHTML = "";
  for (let i=0; i<quizzes.length; i++){
      divtodosQuizzes.innerHTML +=
      `<div class="imagensQuizzes" onclick="irParaQuizz(this)" alt="imagem do quizz">
          <img src="${quizzes[i].image}" alt="imagem-quizz">
          <span class="legendaQuizz">${quizzes[i].title}</span>
      </div>`
  }
}
/*pegarListaQuizes();*/

/* IR PARA CRIAR QUIZZ AO CLICAR NO BOTÃO CRIAR QUIZZ OU + */


function criarQuizz(){
  const botaoCriarQuizz = document.querySelector(".usuario").querySelector("button")

  if (botaoCriarQuizz !== null) {

      const tela1 = document.querySelector(".containerTela1")
      const tela3 = document.querySelector("display-desktop3")

      setTimeout(() => trocarDeTela(tela1,tela3) , 500);
      
  }
}
function trocarDeTela(telaA, telaB){
  
  telaA.classList.add("hidden");
  telaB.classList.remove("hidden");
}

/* IR PARA O QUIZZ ESCOLHIDO */

function irParaQuizz(elemento){
  const botaoIrParaQuizz = document.querySelector(".todosQuizzes")

  if(botaoIrParaQuizz !== null){
      console.log(elemento)
      const tela1 = document.querySelector(".containerTela1")
      const tela2 = document.querySelector(".display-desktop8")
      tela1.classList.add("hidden");
      tela2.classList.remove("hidden") /* renderizarUnicoQuizz() */
      
      /* localizando ID pelo título do Quizz */
      const tituloQuizz = document.querySelector(".imagensQuizzes").querySelector(".legendaQuizz").innerHTML;
      console.log(tituloQuizz)
     
  }
}    

function acharQuizz(){
  const tituloQuizz = document.querySelector(".imagensQuizzes").querySelector(".legendaQuizz").innerHTML;    
  if (quizzes.title === "Quanto otaku você é?"){
      return true
  }else{
      return false
  }
}
/*const oQuizz = quizzes.filter(acharQuizz)
console.log(oQuizz)*/




/*TELA 3*/
let titulo;
let imagemUrl;
let qtdPerguntas;
let qtdNiveis;
let perguntas = [];
let niveis = [];




function validarInfoBasicas(){
   titulo = document.querySelector(".pai-input1 input:nth-child(1)").value;
   imagemUrl = document.querySelector(".pai-input1 input:nth-child(2)").value;
   qtdPerguntas = document.querySelector(".pai-input1 input:nth-child(3)").value;
   qtdNiveis = document.querySelector(".pai-input1 input:nth-child(4)").value;
   if((validarTitulo(titulo)===false) || (validarQtdPerguntas(qtdPerguntas)===false || (validarQtdNiveis(qtdNiveis)===false))){
    alert("Dados inseridos incorretamente. Tente novamente.");
   }
   else{
    inserePerguntas(qtdPerguntas);
    insereNiveis(qtdNiveis);
    const telaUm = document.querySelector(".forms-info-basicas");
    const telaDois = document.querySelector(".forms-de-perguntas");
    trocarDeTela(telaUm, telaDois);
   }
}

function validarTitulo(array){
  if(array<20 || array>65){
    return false;
  }
  return true;
}
function validarImagem(){//não sei ainda como validar se é imagem
  return true;
}
function validarQtdPerguntas(perguntas){
  if(perguntas<3){
    return false;
  }
  return true;
}
function validarQtdNiveis(niveis){
  if(niveis<2){
    return false;
  }
  return true;
}






/*inserção de perguntas no html*/
function inserePerguntas(numeroPerguntas) {
  const conteudoDaPagina = document.querySelector(".forms-de-perguntas");
  for (let i = 0; i < numeroPerguntas; i++) {
    conteudoDaPagina.innerHTML += `
<div class="criar-item-container">
  <div class="inputs-boxes-container">
      <div class="selecionar-item">
          <h3>Pergunta ${i + 1}</h3>
          <ion-icon name="create-outline" onclick="mostrarInputs(this)"></ion-icon>
      </div>
      <div class="inputs-boxes hidden">
          <input type="text" placeholder="Texto da Pergunta">
          <input type="text" placeholder="Cor de fundo da pergunta">
      </div>
  </div>
  <div class="inputs-boxes-container hidden">
      <h3>Resposta correta</h3>
      <div class="inputs-boxes">
          <input type="text" placeholder="Resposta correta">
          <input type="text" placeholder="URL da imagem">
      </div>
  </div>
  <div class="inputs-boxes-container hidden">
      <h3>Respostas incorretas</h3>
      <div class="inputs-boxes">
          <input type="text" placeholder="Resposta incorreta 1">
          <input type="text" placeholder="URL da imagem 1">
      </div>
      <div class="inputs-boxes">
          <input type="text" placeholder="Resposta incorreta 2">
          <input type="text" placeholder="URL da imagem 2">
      </div>
      <div class="inputs-boxes">
          <input type="text" placeholder="Resposta incorreta 3">
          <input type="text" placeholder="URL da imagem 3">
      </div>
  </div>
</div>`
  }
  conteudoDaPagina.innerHTML += `<div class="enviar-infos" onclick="validarPerguntas()">Prosseguir pra criar níveis</div>`
}
let perguntaSelecionada;
function mostrarInputs(elemento) {
  if (perguntaSelecionada !== undefined) {
    ocultarInputs();
  }
  elemento.classList.add("invisible");
  perguntaSelecionada = elemento.parentNode.parentNode.parentNode;
  let hiddenElements = elemento.parentNode.parentNode.parentNode.querySelectorAll(".hidden");
  for (let i = 0; i < hiddenElements.length; i++) {
    hiddenElements[i].classList.remove("hidden");
  }
}
function ocultarInputs() {
  perguntaSelecionada.querySelector("ion-icon").classList.remove("invisible");
  perguntaSelecionada.querySelector(".inputs-boxes-container:nth-child(1) .inputs-boxes").classList.add("hidden");
  perguntaSelecionada.querySelector(".inputs-boxes-container:nth-child(2)").classList.add("hidden");
  perguntaSelecionada.querySelector(".inputs-boxes-container:nth-child(3)").classList.add("hidden");
}


function validarPergunta(){
  const conteudoAValidar = document.querySelector(".forms-de-perguntas");
  const pergunta = conteudoAValidar.querySelector(".inputs-boxes-container:nth-child(1) input:nth-child(1)").value;
  const corDeFundo = conteudoAValidar.querySelector(".inputs-boxes-container:nth-child(1) input:nth-child(2)").value;
  const respostaCerta = conteudoAValidar.querySelector(".inputs-boxes-container:nth-child(2) input:nth-child(1)").value;
  const respostaCertaImagem = conteudoAValidar.querySelector(".inputs-boxes-container:nth-child(2) input:nth-child(2)").value;
  const respostaErrada1 = conteudoAValidar.querySelector(".inputs-boxes-container:nth-child(3) input:nth-child(1)").value;
  const respostaErradaImagem1 = conteudoAValidar.querySelector(".inputs-boxes-container:nth-child(3) input:nth-child(2)").value;
  const respostaErrada2 = conteudoAValidar.querySelector(".inputs-boxes-container:nth-child(3) input:nth-child(3)").value;
  const respostaErradaImagem2 = conteudoAValidar.querySelector(".inputs-boxes-container:nth-child(3) input:nth-child(4)").value;
  const respostaErrada3 = conteudoAValidar.querySelector(".inputs-boxes-container:nth-child(3) input:nth-child(5)").value;
  const respostaErradaImagem3 = conteudoAValidar.querySelector(".inputs-boxes-container:nth-child(3) input:nth-child(6)").value;
} //trabalhando nisso

function validarTextoPergunta(array){
  if(array>20){
    return false;
  }
  return true;
}














/*inserção de niveis no html*/
function insereNiveis(numeroNiveis) {
  const conteudoDaPagina = document.querySelector(".forms-de-niveis");
  for (let i = 0; i < numeroNiveis; i++) {
    conteudoDaPagina.innerHTML += `
  <div class="criar-item-container">
    <div class="inputs-boxes-container">
        <div class="selecionar-item">
            <h3>Nível ${i + 1}</h3>
            <ion-icon name="create-outline" onclick="mostrarInputsNiveis(this)"></ion-icon>
        </div>
        <div class="inputs-boxes hidden">
            <input type="text" placeholder="Título do nível">
            <input type="text" placeholder="% de acerto mínima">
            <input type="text" placeholder="URL da imagem do nível">
            <input type="text" placeholder="Descrição do nível">
        </div>
    </div>
  </div>
  `
  }
  conteudoDaPagina.innerHTML += `<div class="enviar-infos" onclick="validarNiveis()">Finalizar Quizz</div>`
}
let nivelSelecionado;
function mostrarInputsNiveis(elemento) {
  if (nivelSelecionado !== undefined) {
    ocultarInputsNiveis();
  }
  elemento.classList.add("invisible");
  nivelSelecionado = elemento.parentNode.parentNode.parentNode;
  let hiddenElement = elemento.parentNode.parentNode.parentNode.querySelector(".hidden");
  hiddenElement.classList.remove("hidden");
}
function ocultarInputsNiveis(){
  nivelSelecionado.querySelector("ion-icon").classList.remove("invisible");
  nivelSelecionado.querySelector(".inputs-boxes").classList.add("hidden");
}