/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let currentQuestion = {}
let chooseOption = true
let score = 0
let questionNumber = 0
let questions = [
  { question: 'What is 2+2?',
    choice1: '2',
    choice2: '3',
    choice3: '4',
    choice4: '5',
    answer: 3
  },
  { question: 'What is 2+5?',
    choice1: '2',
    choice2: '7',
    choice3: '4',
    choice4: '5',
    answer: 2
  },
  { question: 'What is 2+8?',
    choice1: '10',
    choice2: '3',
    choice3: '4',
    choice4: '5',
    answer: 1
  },
  { question: 'What is 2+6?',
    choice1: '2',
    choice2: '3',
    choice3: '4',
    choice4: '8',
    answer: 4
  }
]
const score_points = 100
const max_questions = 4

/*------------------------ Cached Element References ------------------------*/
// Cached elements for User's Game Options
const gameHeadingEl = document.querySelector('.game-heading')
const questionEl = document.querySelector('#question-text')
const correctAnsEl = document.querySelector('#correct-answer-text')
const scoreEl = document.querySelector('#score-text')
const choices = Array.from(document.querySelectorAll('.choicecontainer'))
const nextEl = document.querySelector('#next-btn')


/*----------------------------- Event Listeners -----------------------------*/

// gameOption2.addEventListener('click', '')
// gameOption3.addEventListener('click', '')
// gameOption4.addEventListener('click', '')


/*-------------------------------- Functions --------------------------------*/
init ()

function init(){
  questionNumber = 0
  score = 0
  
}


