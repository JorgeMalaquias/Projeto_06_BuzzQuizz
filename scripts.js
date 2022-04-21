/*inserção de perguntas */















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

    criarQuiz