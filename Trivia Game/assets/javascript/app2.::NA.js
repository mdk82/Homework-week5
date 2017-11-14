// Variables
// ==============================================================================

// Game Object

var questions = [
	{
		question: "The first person shooter video game Doom was first released in what year?",
		answers: [
		"1997",
		"1989",
		"1993",
		"2000"
		],
		correct: "1993",
	},
		{
		question: "In what year did Nintendo release its first game console in North America?",
		answers: [
		"1987",
		"1981",
		"1985",
		"1992"
		],
		correct: "1985",
	},
		{
		question: "Who is the fastest of these video game characters?",
		answers: [
		"Sonic",
		"Mario",
		"Donkey Kong",
		"Toad"
		],
		correct: "Sonic",
	},
		{
		question: "What system was originally planned as a CD-ROM add-on for the Super Nintendo?",
		answers: [
		"PlayStation",
		"Sega Genesis",
		"XBOX",
		"Atari"
		],
		correct: "PlayStation",
	},
		{
		question: "In the world of video games, what does NES stand for?",
		answers: [
		"Nintendo Entertainment Standard",
		"National Entertainment System",
		"Nintendo Excellent System",
		"Nintendo Entertainment System"
		],
		correct: "Nintendo Entertainment System",
	},

];
		// testing
		// console.log(questions.length);
		// console.log(questions[0].answers);
		// console.log(questions[0].correct);
		// console.log(questions[1].answers);
		// console.log(questions[1].correct);
		// console.log(questions[2].answers);
		// console.log(questions[2].correct);
		// console.log(questions[3].answers);
		// console.log(questions[3].correct);
		// console.log(questions[4].answers);
		// console.log(questions[4].correct);
		

// Global Variables

var counter = 15;
var currentQuestion = 0;
var timerRunning = false;
var correct = 0;
var incorrect = 0;
//var answers = [];
//var question.. = [];


// Functions
// =============================================================================

// Timer Function

function timer () {
	var timerInterval = window.setInterval(time, 1000);
	timerRunning = true
	function time () {
		counter--;
		$('.countdown').html("Timer: " + counter);
		if (counter === 0) {
			nextQuestion();
			timerRunning = false;
			incorrect++
			console.log("incorrect: " + incorrect);
			clearInterval(timerInterval);
		}
	}
}

timer();

function nextQuestion() {
	if (currentQuestion === questions.length) {
		endGame();
	} else {

		$('.question').html(questions[currentQuestion].question);

		for (i = 0; i < questions[currentQuestion].answers.length; i++) {
			$('.button' + i).html(questions[currentQuestion].answers[i]);

				// testing
				// console.log('Question index ' + currentQuestion);
				// console.log('Answers index ' + i);

			$('.button' + i).click(function() {
				var userChoice = $(this).html();
				console.log(userChoice);
				console.log(questions[currentQuestion].correct);
				$('.button').off();

				if (questions[currentQuestion].correct === userChoice) {
					console.log(userChoice);
					console.log(questions[currentQuestion].correct);
					correct++
					currentQuestion++
				} else {
					incorrect++
					currentQuestion++
				}
				console.log('correct answers: ' + correct);
				console.log('incorrect answers: ' + incorrect);
				nextQuestion();
			});
		}
	}
}

nextQuestion();

function endGame() {
	$('.question').html("<h1> Game Over!</h1>");
}



