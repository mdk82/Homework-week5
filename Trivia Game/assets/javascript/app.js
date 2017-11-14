// set object of questions and answers

// set global variables

// set click functions needed to start game, onWindow, answer clicked and restart

// create startGame() method that will start the timer, remove the start button,
// show main game elements, display the question and answers to the page.

// create timer() method that will count down from 15 to 0, display that timer to page,
// if timer hits 0 move to nextQuestion(), ++ unanswered, 

// create nextQuestion() method that will incement questions[i].question, reset timer(),
// display new question and answers for next ++ of questions[i].question, 




window.onload = () => {

	elements.start();

};

// Questions and Answers Object
// ==============================================

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

// Global Variables
// ==========================================

var currentQuestion = 0;
var counter = 16;
var timer = false;
var interval;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var question;
var answerIndex;
var correct;
var responces = [];

// Game Logic Object & Methods
// ===========================================

var game = {

	loadQuestion : function() {
		game.finalQuestion();
		// display next question and answer button elements
		correct = questions[currentQuestion].correct;
		question = questions[currentQuestion].question;
		responces = questions[currentQuestion].answers;
		counter = 16;

			// testing
			console.log(question);
			console.log(responces);
			console.log(correct);
			console.log(counter);

		$('.question').html(question);

		for (i = 0; i < responces.length; i++) {
			$('.buttons').append($('<li>').attr('class', 'answers').html(responces[i]));
		}
			game.timerOn();
			game.checkResponse();

	},

	checkResponse : function() {
		// check if answer was correct
		$('.answers').click(function() {
			var userAnswer = $(this).html();

		if (userAnswer === correct) {
			game.correct();
			currentQuestion++
			console.log('correct answers: ' + correctAnswer);
			console.log('questions index: ' + currentQuestion);
			console.log("=============checkResponseCorrect================")
			$('.answers').remove();
			game.timerOff()
			game.loadQuestion();
		}

		else if (userAnswer !== correct) {
			game.incorrect();
			currentQuestion++
			console.log('correct answers: ' + correctAnswer);
			console.log('questions index: ' + currentQuestion);
			console.log("=============checkResponseIncorrect================")
			$('.answers').remove();
			game.timerOff()
			game.loadQuestion();
		}

		});	
		
	},

	finalQuestion: function() {
		if (currentQuestion === 5) {
			elements.results();
		}

	},

	timerOn : function() {
		// create setInterval()
		interval = window.setInterval(game.clock, 1000);
		// set timer to true
		timer = true;
		game.clock();
	},

	clock: function() {
		// decrement counter
		counter--;
		$('.countdown').text(counter);
		if (counter === 0) {
			game.timerOff();
			timer = false;
			unanswered++;
			currentQuestion++;
			$('.answers').remove();
			game.timerOff();
			game.loadQuestion();
		}
	},

	timerOff: function() {
		clearInterval(interval);
		timer = false;

	},

	correct : function() {
		// incement correct
		correctAnswer++
	},

	incorrect : function() {
		// increment incorrect
		incorrectAnswer++
	}
};

// DOM Object & Methods
// ==============================================

var elements = {

	start: function() {
		// show startgame elements, hide others
		$('#gamecontainer').hide();
		//$('#end').hide();
		$('#start').html("<h1> Put Your Knowledge To The Test </h1>" + "<br>" + "<button class='startbutton'> Start Game </button")
		// start game button
		$('.startbutton').on('click', function() {
			game.loadQuestion();
			$('#start').hide();
			$('#gamecontainer').show();
		// start the timer function
			console.log('correct answers: ' + correctAnswer);
			console.log('array index: ' + currentQuestion);
			console.log("===============start================")
		})
	},

	results: function() {
		// show results elements, hide others
		$('#gamecontainer').hide();
		$('#end').html("<h1> Lets see how you did. </h1>" + "<br>" + "<h2> Correct Answers: " + correctAnswer + "<br>" + "<h2> Incorrect Answers: " + incorrectAnswer + "<br>" + "<br>" + "<button class='restartbutton'> Restart </button")
		//display restart button
		$('.restartbutton').on('click', function() {
			$('#end').hide();
			currentQuestion = 0;
			correctAnswer = 0;
			incorrectAnswer = 0;
			game.loadQuestion();


			$('#gamecontainer').show();
		})
	}
}