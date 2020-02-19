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
      correctAnswer: 'Salt of the earth',
      scripture: 'The correct answer is `Salt of the Earth`<br>Look up Matthew 5:13-16'
    },
    {
      question: 'Where did Jesus tell his followers to go?',
      answers: [
        'To all nations, preaching the gospel',
        'Home',
        'To the synagoge',
        'To Cesars\' palace'
      ],
      correctAnswer: 'To all nations, preaching the gospel',
      scripture: "The correct answer is 'To all nations, preaching the gospel'<br> Look up "
    },
    {
      question: 'What did Jesus call himself?',
      answers: [
        'Grimm-reaper',
        'Another good teacher',
        'Son of God',
        'A nice guy'
      ],
      correctAnswer: 'Son of God',
      scripture: "The correct answer is 'Son of God'<br> Look up"
    },
    {
      question: 'What did Jesus call the religious leaders of his day?',
      answers: [
        'Snakes and brood of Vipers! ',
        'Broken mirrors',
        'Goyim',
        'Sons of Hagar'
      ],
      correctAnswer: 'Snakes and brood of Vipers! ',
      scripture: "The correct answer is 'Snakes and brood of Vipers!'<br> Look up "
    },
    {
      question: 'What did Jesus call his followers?',
      answers: [
        'The wick of the candle',
        'Wisest in the world',
        'Brothers and Sisters',
        'Slaves'
      ],
      correctAnswer: 'Brothers and Sisters',
      scripture: "The correct answer is 'Brothers and Sisters'<br> Look up  "
    },
  ],
  questionNumber: 0,
  score: 0,
  gotItRight: true,
  answerUserChose: undefined
};

//helps to keep track of what part of the quiz we're on
let currentPage = 'startPage';

//render function calls gneerateHtml function
function render(){
  console.log('`render function` ran');
  const createdHtml = generateHtml(STORE);  
  $('main').html(createdHtml);
}

//it renders the appropriate html based on which event listener was activated
function generateHtml(page){
  if (currentPage === 'startPage') {
    return startPage();
  } else if (currentPage === 'questionPage') {
    return questionPage();
  } else if (currentPage === 'resultsPage') {
    return resultsPage();
  } else if (currentPage === 'feedbackPage') { 
    return feedbackPage();
  }
}

//calls the store to see if they got the question correct
//this tells us what to render on the feedbackForm
function didTheyGetItRight() {
  let answer = STORE['questions'][STORE.questionNumber - 1].correctAnswer;
  if (STORE.gotItRight === true) {
    return `
    <label for = 'correct-answer' class = 'correct-answer'>
    <span class = 'correct-answer-text'>Congratulations! You chose the correct answer of "${answer}."</span>
  </label>`;
  }
  else {
    return `
     <label for = 'correct-answer' class = 'correct-answer'>
    <span class = 'correct-answer-text'>Sorry, you chose "${STORE.answerUserChose}" but the correct answer was: "${answer}."</span>
  </label>
  `;
  }
}

//is called to render html for the beginning of the quiz
function startPage(){
  console.log('`startPage function` ran');
  //change buttons to input, can still get
  return `<body>
    <section>
    <form class=""action="">

        <h2>Do you get the words of Jesus mixed up with other historical figures? <br>Test your knowledge...</h2>
        <h2>You just might be surprised!</h2>
        <button name="start" id="start">START</button>
    </form>
    
    </section>
</body>`;

}
//This listens to the start page for clicks to start the quiz.
function handleStartPage(){
  $('main').on('click', '#start', function() {
    event.preventDefault();
    console.log('start button clicked');
    currentPage = 'questionPage';
    STORE.questionNumber = 1;
    console.log(STORE.questionNumber);
    render();
  });
}
//is called to render html for the questions
function questionPage(){
  console.log('questionPage function ran');
  let questionToDisplay = STORE['questions'][STORE.questionNumber - 1].question;
  let answerIndexToDisplay = STORE['questions'][STORE.questionNumber - 1].answers;
  let scoreSoFar = STORE.score;
  let currentQuestionNumber = STORE.questionNumber;
  return `<body>
  <section>
  <p class="result-total">
      Question #: ${currentQuestionNumber} You have answered ${scoreSoFar} correctly!
  </p>
  <form class="question-form">
    <h2 class = 'question-section'>${questionToDisplay}</h2>
    <div class= 'result-answers'>
  <div class = 'answers'>
    <label for = 'option1' class = 'ans-choices'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option1' value ='0' required>
      <span class = 'ans-choice'>${answerIndexToDisplay[0]}</span>
    </label>
    <label for = 'option2' class = 'ans-choices'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option2' value = '1' required>
      <span class = 'ans-choice'>${answerIndexToDisplay[1]}</span>
    </label>
    <label for = 'option3' class = 'ans-choices'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option3' value = '2' required>
      <span class = 'ans-choice'>${answerIndexToDisplay[2]}</span>
    </label>  
    <label for = 'option4' class = 'ans-choices'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option4' value = '3' required>
      <span class = 'ans-choice'>${answerIndexToDisplay[3]}</span>
    </label>
    </div>
    </div>
    <button class="submit">SUBMIT</button>
  </form>
</body>`;
}
//This listens to the question form for clicks to submit an answer.
function handleQuestionPage(){
  console.log('`questionPageHandler function` ran');
  $('main').on('click', '.submit', function(event) {
    event.preventDefault();
    console.log('submit answer button clicked');

    let radioValue = parseInt(document.querySelector('input[name="answer"]:checked').value);
    console.log(`The radioValue is: ${radioValue}.`);
      

    let answerUserChose = STORE['questions'][STORE.questionNumber-1].answers[radioValue];
    console.log(`The answer the user chose is: ${answerUserChose}`);
    STORE.answerUserChose = answerUserChose;


    let currentCorrectAnswer = STORE['questions'][STORE.questionNumber-1].correctAnswer;
    console.log(`The current correct answer is: ${currentCorrectAnswer}`);

    if (answerUserChose === currentCorrectAnswer) {
      console.log('checked correct answer');
      STORE.score += 1;
      STORE.gotItRight = true;
    } else {
      STORE.gotItRight = false;
    }
    currentPage = 'feedbackPage';
    console.log(`Question number is ${STORE.questionNumber}`);
    return render();
  });
}

//is called to render html for the feedback of the question
function feedbackPage(){
  console.log('questionPage function ran');
  let questionToDisplay = STORE['questions'][STORE.questionNumber - 1].question;
  let answerIndexToDisplay = STORE['questions'][STORE.questionNumber - 1].answers;
  let scoreSoFar = STORE.score;
  let currentQuestionNumber = STORE.questionNumber;
  return `<body>
  <section>
  <p class="result-total">
      Question #: ${currentQuestionNumber} You have answered ${scoreSoFar} correctly!
  </p>
  <form class="question-form">
    <h2 class = 'question-section'>${questionToDisplay}</h2>
    <div class="explain-results-small explain-results-large">
    <p class="explain">${didTheyGetItRight()}</p>
</div>
    <div class= 'result-answers'>
  <div class = 'answers'>
    <label for = 'option1' class = 'ans-choices'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option1' value ='0' required>
      <span class = 'ans-choice'>${answerIndexToDisplay[0]}</span>
    </label>
    <label for = 'option2' class = 'ans-choices'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option2' value = '1' required>
      <span class = 'ans-choice'>${answerIndexToDisplay[1]}</span>
    </label>
    <label for = 'option3' class = 'ans-choices'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option3' value = '2' required>
      <span class = 'ans-choice'>${answerIndexToDisplay[2]}</span>
    </label>  
    <label for = 'option4' class = 'ans-choices'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option4' value = '3' required>
      <span class = 'ans-choice'>${answerIndexToDisplay[3]}</span>
    </label>
  
    </div>
    
    </div>
    <button class="next-question">NEXT QUESTION</button>
  </form>
  
</body>`;
}
//This listens to the feedback form for clicks to go to next page...question/results
function handleFeedbackPage(){
  $('main').on('click', '.next-question', function() {
    event.preventDefault();
    console.log('next question button clicked');
    STORE.questionNumber += 1;
    if (STORE.questionNumber === 6) {
      currentPage = 'resultsPage';
      return render();
    } else {
      currentPage = 'questionPage';
      return render();
    }         
  });
}

//is called to render html for the final results of quiz
function resultsPage(){
  let finalScore = STORE.score;
  return `<body>
    <section>
    <form action="">
<div id="results-display">
    <h2>The results are in...</h2>
        <span id = 'current-score'>Your final score was<br> ${finalScore} out of 5.</span>
    </div>
        
    <button name="retake-quiz" id="retake-quiz">RETAKE QUIZ</button> 
    </form>
    
    </section>
</body>`;
}
//listens to click to restart quiz
function handleResultsPage(){
  $('main').on('click', '#retake-quiz', function() {
    console.log('restart button clicked');
    event.preventDefault();
    currentPage = 'startPage';
    STORE.questionNumber = 0;
    STORE.score = 0;
    render();
    
  });
}

//function that calls all the listener functions
function handleQuizApp(){
  render();
  handleStartPage();
  handleQuestionPage();
  handleFeedbackPage();
  handleResultsPage();
}

//jQuery object that runs after the page loads
$(handleQuizApp);