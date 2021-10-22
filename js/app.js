/*-------------------------------- Constants --------------------------------*/
const SCORE_POINTS = 10
const MAX_QUESTIONS = 10

/*-------------------------------- Variables --------------------------------*/
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
  { question: 'What is 2+2?',
    choice1: '2',
    choice2: '3',
    choice3: '4',
    choice4: '5',
    answer: 3,
  },
  { question: 'What is 2+5?',
    choice1: '2',
    choice2: '7',
    choice3: '4',
    choice4: '5',
    answer: 2,
  },
  { question: 'What is 2+8?',
    choice1: '10',
    choice2: '3',
    choice3: '4',
    choice4: '5',
    answer: 1,
  },
  { question: 'What is 2+6?',
    choice1: '2',
    choice2: '3',
    choice3: '4',
    choice4: '8',
    answer: 4,
  }]

/*------------------------ Cached Element References ------------------------*/
// Cached elements for User's Game Options
const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

/*-------------------------------- Functions --------------------------------*/
function startGame() {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
}

function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/end.html')
  }
  questionCounter++
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]
  question.innerText = currentQuestion.question

  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })

  availableQuestions.splice(questionsIndex, 1)
  acceptingAnswers = true 
}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct'  : 'incorrect'

    if(classToApply === 'correct') {
      incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()
    }, 1000)
  })
})

incrementScore = num => {
  score += num
  scoreText.innerText = score
}

startGame()