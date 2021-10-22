# _How American Are You?_

## Description:
###  In this game the user will be quizzed on their knowledge of US History. These questions are based on the citizenship test that many foreigners have to take before becoming a citizen of the United States. The user will be given the option to select one of the four quizzes to play. There are 25 questions in each quiz but only 10 will be randomly generated for the user to see and play. The user will win if all the answers are chosen correctly. 

## Motivation Background:
### I chose this game because my mother is currently a permanent resident here in the United States. She will soon have to apply for citizenship but she has not studied for the test that many take to become a citizen of the United States. There are 100 questions that the US believes are important for the test but only a few are asked when tested. This means my mom will have to know all 100 answers so that she is not tripped up during testing to become a citizen. I have created this game for her and for people like her who also need to study. I hope that this game will help anyone that needs it. 

---
## Getting Started:
### Click [here](https://samuelperalesg.github.io/How-American-Are-You/) to open the game.
## To Play:
1. Select a quiz
2. choose one of the four choices for your answer
3. Click "Next"

---
## Game View:

![game planning 1](https://i.ibb.co/0YNM56d/Screen-Shot-2021-10-22-at-7-57-36-AM.png)

![game planning 2](https://i.ibb.co/f2q8c7W/Screen-Shot-2021-10-22-at-7-57-13-AM.png)

---
## Technology Implemented:
- HTML
- CSS
- JavaScript
- Git

## Credits:
[USCIS](https://www.uscis.gov/sites/default/files/document/questions-and-answers/100q.pdf)

## Pseudocode:
- Set Up Main Screen (if I can figure out how to link multiple screens in one website)
  - Welcome Message
	- Cached elements for User's Game Options
	- Buttons for User's Game Options
	- Ability to open game options
- Each Option of Game
	- Open game chosen
	- Create cards for each game, 25 for each game
	- create exit button in case user wants to leave, make black
	- Each Card will have 1 question, 4 options, 1 correct answer
	- Link card question to display
	- Link 4 options to each button 
	- Create random function to mix question cards
	- Prompt user to make selection
	- Prompt user to click 'submit' button
	- Evaluate if correct answer was chosen
		- Show display in green if answer chosen matches correct answer
		- Show display in red if answer chosen does not match correct answer
	- Show 'next' button after selection is chosen
	- Make progress bar match with how many questions are left
- When finished with game
	- Hide submit and next buttons
	- Hide selection buttons
	- Make display big with message
		- If user got all correct, show message 'hooray! You Won!!!'
		- If user got some wrong, show message 'Better study up!'
		- If all wrong, show message 'Uh oh, you're not very American!!!'
	- Show Exit Button in bright red to let user know to exit game
- Return to main screen

---
## Next Steps:
- Convert questions into other languages (ie. Spanish, French, Chinese, etc.)
- Allow for user to save previous scores
- Organize questions into similar categories (ie. years to know, people to know, important events, important laws, etc.)