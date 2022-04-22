/*
let titulo;
let imagem;
let pergunta;
let nivel;


let quizzes = []
const divtodosQuizzes = document.que

/*funções*/
/*
function criarQuizpegarListaQuizes() {
    const promise = axios.post(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes`)
 promise.then(carregarQuizz)
}

function carregarQuizz(response){
  quizzes = response.data;

/*condição de perguntas */
/*
criarQuizpegarListaQuizes()







/*criando quiz*/
/*
let criar_quiz = {};
let questions_array = [];
let level_array = [];

/*funções*/
/*
function criarQuiz() {
    
    const promise = axios.post(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes`, {
    title: criar_quiz.title,
    image: criar_quiz.image,
    questions: criar_quiz.questions,
    levels: criar_quiz.levels
      });
    
    
      promise.then((response) => {
        const quizz = response.data;
        })
    
    }
  }
    criarQuiz()

*/

/*inserção de perguntas no html*/

function inserePerguntas(numeroPerguntas) {
  const conteudoDaPagina = document.querySelector(".forms-de-perguntas");
  for(let i=0;i<numeroPerguntas;i++){
    conteudoDaPagina.innerHTML += `
<div class="criar-item-container">
  <div class="inputs-boxes-container">
      <div class="selecionar-item">
          <h3>Pergunta ${i+1}</h3>
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
function mostrarInputs(elemento){
  if(perguntaSelecionada!==undefined){
    ocultarInputs();
  }
  elemento.classList.add("invisible");
  perguntaSelecionada = elemento.parentNode.parentNode.parentNode;
  let hiddenElements = elemento.parentNode.parentNode.parentNode.querySelectorAll(".hidden");
  for(let i=0;i<hiddenElements.length;i++){
    hiddenElements[i].classList.remove("hidden");
  }
}
function ocultarInputs(){
  perguntaSelecionada.querySelector("ion-icon").classList.remove("invisible");
  perguntaSelecionada.querySelector(".inputs-boxes-container:nth-child(1) .inputs-boxes").classList.add("hidden");
  perguntaSelecionada.querySelector(".inputs-boxes-container:nth-child(2)").classList.add("hidden");
  perguntaSelecionada.querySelector(".inputs-boxes-container:nth-child(3)").classList.add("hidden");
}
inserePerguntas(3);

/*inserção de perguntas no html*/
