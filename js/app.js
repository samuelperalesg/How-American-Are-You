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
  { question: 'What is the supreme law of the land?',
    choice1: 'Bill of Rights',
    choice2: 'Federal Law',
    choice3: 'The Constitution',
    choice4: 'State Law',
    answer: 3,
  },
  { question: 'What does the Constitution do?',
    choice1: 'sets up the government',
    choice2: 'defines the government',
    choice3: 'protects basic rights of Americans',
    choice4: 'All of the above',
    answer: 4,
  },
  { question: 'What is one right or freedom from the First Amendment?',
    choice1: 'press',
    choice2: 'democracy',
    choice3: 'worship',
    choice4: 'run for government',
    answer: 1,
  },
  { question: 'What are two rights in the Declaration of Independence?',
    choice1: 'freedom & life',
    choice2: 'life & pursuit of happiness',
    choice3: 'liberty & freedom',
    choice4: 'none of the above',
    answer: 2,
  },
  { question: 'What is the economic system in the United Statese?',
    choice1: 'democratic',
    choice2: 'socialist',
    choice3: 'marxist',
    choice4: 'capitlist',
    answer: 4,
  },
  { question: 'What is the “rule of law”',
    choice1: 'no one is above the law',
    choice2: 'law applies only to citizens',
    choice3: 'only the president may break the law',
    choice4: 'it is not practiced in the United States',
    answer: 1,
  },
  { question: 'What stops one branch of government from becoming too powerful?',
    choice1: 'checks',
    choice2: 'balances',
    choice3: 'A & C',
    choice4: 'none of the above',
    answer: 3,
  },
  { question: 'Who is in charge of the executive branch?',
    choice1: 'We the People',
    choice2: 'The President',
    choice3: 'Congress',
    choice4: 'Supreme Justices',
    answer: 2,
  },
  { question: 'How many U.S. Senators are there?',
    choice1: '268',
    choice2: '215',
    choice3: '9',
    choice4: '100',
    answer: 4,
  },
  { question: 'What is the political party of the President now?',
    choice1: 'Democrat',
    choice2: 'Republican',
    choice3: 'Independent',
    choice4: 'Green',
    answer: 1,
  }
]

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