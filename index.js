'use strict';

const STORE = {
  questions: [
    {
      question: 'What did Jesus tell his followers they were supposed to be like?',
      answers: [
        'Fish of the sea',
        'Bread of the meal',
        'Fire in the desert',
        'Salt of the earth'
      ],
      correctAnswer: 'Salt of the earth'
    },
    {
      question: 'Where did Jesus tell his followers to go?',
      answers: [
        'To all nations, preaching the gospel',
        'Home',
        'To the synagoge',
        'To Cesars\' palace'
      ],
      correctAnswer: 'To all nations, preaching the gospel'
    },
    {
      question: 'What did Jesus call himself?',
      answers: [
        'Grimm-reaper',
        'Another good teacher',
        'Son of God',
        'A nice guy'
      ],
      correctAnswer: 'Son of God'
    },
    {
      question: 'What did Jesus call the religious leaders of his day?',
      answers: [
        'Snakes and brood of Vipers! ',
        'Broken mirrors',
        'Goyim',
        'Sons of Hagar'
      ],
      correctAnswer: 'Snakes and brood of Vipers! '
    },
    {
      question: 'What did Jesus call his followers?',
      answers: [
        'The wick of the candle',
        'Wisest in the world',
        'Brothers and Sisters',
        'Slaves'
      ],
      correctAnswer: 'Brothers and Sisters'
    },
  ],
  questionNumber: 0,
  score: 0,
  gotItRight: true,
  answerUserChose: undefined
};

//
let currentPage = 'startPage';

function render(){

}
function generateHtml(page){

}



function startPage(){

}
function handleStartPage(){

}

function questionForm(){

}
function handleQuestionForm(){

}

function feedbackForm(){

}
function handleFeedback(){

}

function resultsForm(){

}
function handleResults(){

}

function handleQuizApp(){
  render();
  handleStartPage();
  handleQuestionForm();
  handleFeedback();
  handleResults();
}

$(handleQuizApp);