'use strict';

//The store where almost every variable lives.
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

//helps to keep track of what part of the quiz we're on
let currentState = 'startPage';

//render function calls gneerateHtml function
function render(){

}

//it renders the appropriate html based on which event listener was activated
function generateHtml(page){

}

//calls the store to see if they got the question correct
//this tells us what to render on the feedbackForm
function correctAnswerValidator(){

}

//is called to render html for the beginning of the quiz
function startPage(){

}
//This listens to the start page for clicks to start the quiz.
function handleStartPage(){

}

//is called to render html for the questions
function questionForm(){

}
//This listens to the question form for clicks to submit an answer.
function handleQuestionForm(){

}

//is called to render html for the feedback of the question
function feedbackForm(){

}
//This listens to the feedback form for clicks to go to next page...question/results
function handleFeedback(){

}

//is called to render html for the final results of quiz
function resultsForm(){

}
//listens to click to restart quiz
function handleResults(){

}

//function that calls all the listener functions
function handleQuizApp(){
  render();
  handleStartPage();
  handleQuestionForm();
  handleFeedback();
  handleResults();
}

//jQuery object that runs after the page loads
$(handleQuizApp);