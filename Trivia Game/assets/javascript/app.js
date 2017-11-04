

	// Start the game with a button to call start game function.

	// Have a list of questions to use for each round
		// Display a question for the current round.

	// Have list of 5 posible answers to the specific question of the round
	// one of the questions being the correct answer.
		// Display the 5 answers for the current question being asked make
		// these clickable buttons.

	// Have a timer of 30 sec that counts down until user selects an answer
	// or timer runs out.

	// if user guesses correct, congratulate user, add to guessed correct
	// and move on to the next rounds question.

	// if user guesses wrong, say guessed wrong, add to guessed wrong and move
	// on to the next rounds question.

	// if timer runs out before user guesses, add to guessed wrong and move
	// on to the next rounds question.

	// When finished with all questions, display score results of the game,
	// correct guesses, wrong guesses.

	// display a restart game button that calls the start game function again
	// to restart the game.

	// Variables
	// ============================================================================
	
	// Game Object

	var questions = [{
		"question": "A koala's diet consists mainly of what?",
		"answer1": "eucalyptus leaves",
		"answer2": "maple leaves",
		"answer3": "figs",
		"answer4": "bamboo",
		"answer5": "tree bark"
	}, {
		"question": "Who played the title character in the teen sitcom musical comedy 'Hannah Montana'?",
		"answer1": "mandy more",
		"answer2": "miley cyrus",
		"answer3": "hilary duff",
		"answer4": "jessica alba",
		"answer5": "amanda bynes"
	}];

		// Testing
		console.log(questions);
		console.log(questions[0]);
		console.log(questions[0].question);
		console.log("array length " + questions.length);

	// Global Variables

	var questionIndex = 0;
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var questionTotal = questions.length;
	var count = 10;
	var timer = setInterval(countDown, 1000)

		// Testing
		console.log('Total questions in arrary ' + questionTotal);


	var q1c = questions[0].answer1;
	var q2c = questions[1].answer2;
	

	
	// Functions
	// =========================================================================
	
	function answers () {
		if (questions[questionIndex].answer1 === q1c) {
				correctAnswers++
				questionIndex++

				console.log(questions[questionIndex].answer1);
				console.log(q1c);
		}
	};

	// Timer Function, counts down from 10

	function countDown () {
		$(".countdown").html(count)
		--count;
		if (count <= -1) {
			console.log("Times Up, Next Question.")
			count = 10;
			questionIndex++
			startGame(questionIndex);
		}
		if (questionIndex === questionTotal) {
			clearInterval(timer);
			$('.countdown').hide();
			$('.question').hide();
			$('.answerscontainer').hide();
			$('.game').append("Correct Answers: " + correctAnswers + " | Incorrect Answers: " + incorrectAnswers)
		}
	};
	
	// Starts the game, populates HTML at index
	function startGame (questionsIndex) {
		var q = questions[questionIndex];
		$('.question').html(q.question);
		$('.button1').html(q.answer1);
		$('.button2').html(q.answer2);
		$('.button3').html(q.answer3);
		$('.button4').html(q.answer4);
		$('.button5').html(q.answer5);
		console.log('Index of question ' + q.question);
		console.log(questions[questionIndex].answer1);
		console.log(q1c);
	}

	startGame(questionIndex);



	// Main Logic
	// =========================================================================

	$('.button1').click(function() {
		answers();
		startGame(questionIndex);

			//testing
			console.log(questionIndex);
			console.log('Correctly Answered ' + correctAnswers);
			console.log('Incorrectly Answered ' + incorrectAnswers);
	});

	$('.button2').click(function() {
		answers();
		startGame(questionIndex);

			//testing
			console.log(questionIndex);
			console.log('Correctly Answered ' + correctAnswers);
			console.log('Incorrectly Answered ' + incorrectAnswers);
	});

	$('.button3').click(function() {
		answers();
		startGame(questionIndex);

			//testing
			console.log(questionIndex);
			console.log('Correctly Answered ' + correctAnswers);
			console.log('Incorrectly Answered ' + incorrectAnswers);
	});

	$('.button4').click(function() {
		answers();
		startGame(questionIndex);

			//testing
			console.log(questionIndex);
			console.log('Correctly Answered ' + correctAnswers);
			console.log('Incorrectly Answered ' + incorrectAnswers);
	});

	$('.button5').click(function() {
		answers();
		startGame(questionIndex);

			//testing
			console.log(questionIndex);
			console.log('Correctly Answered ' + correctAnswers);
			console.log('Incorrectly Answered ' + incorrectAnswers);
	});

	

