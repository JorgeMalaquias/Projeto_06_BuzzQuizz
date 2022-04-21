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

/*condição de perguntas */

criarQuizpegarListaQuizes()







/*criando quiz*/
let criar_quiz = {};
let questions_array = [];
let level_array = [];

/*funções*/

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
