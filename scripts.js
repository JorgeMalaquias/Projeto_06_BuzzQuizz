let titulo;
let imagem;
let pergunta;
let nivel;

let quizzes = []
const divtodosQuizzes = document.que

/*funções*/

function criarQuizpegarListaQuizes() {
    const promise = axios.post(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes`)
 promise.then(carregarQuizz)
}

function carregarQuizz(response){
  quizzes = response.data;
  renderizarQuizzes
}


criarQuizpegarListaQuizes()

