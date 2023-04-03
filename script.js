// Create all of our variables
var isSaved = "nqa-saved";
var isDisplayed = false;
var isStarted = false;
var questionBank = [];
var newQBank = [];
var scoreCard = [];
var parList = [];
// var questionCount = 0;

// Grab all of our elements
var quizContainer = document.querySelector(".quiz");
var questionContainer = document.querySelector(".question-container");
var answer = document.querySelector(".answer");
var main = document.querySelector("main");
var start = document.querySelector("#start");
var hide = document.querySelector("#hide");
var questionHead = document.querySelector("#question-head");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
var timer = document.querySelector("#timer");
var right = document.querySelector("#right");
var timer = document.querySelector("#wrong");

// TODO create timer function to handle our quiz time
// Timer that counts down from 5
function countdown() {
  var timeRemaining = 3600;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeRemaining > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timer.textContent = timeRemaining + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeRemaining--;
    } else if (timeRemaining === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timer.textContent = timeRemaining + " second remaining";
      timeRemaining--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timeRemaining.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// // Displays the message one word at a time
// function displayMessage() {
//   var wordCount = 0;

//   // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var msgInterval = setInterval(function () {
//     // If there are no more words left in the message
//     if (words[wordCount] === undefined) {
//       // Use `clearInterval()` to stop the timer
//       clearInterval(msgInterval);
//     } else {
//       // Display one word of the message
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 1000);
// }

// TODO create the user and score card to be used in the localStorage

//TODO:create a function that will store the quiz data into the localStorage and it will validate (check to see) if the data has already been saved to the localStorage
var initialize = fetch("./assets/question-answer-bank.json").then((response) =>
  response
    .json()
    .then((data) => {
      if ("naruto-quiz" in localStorage) {
        return;
      } else {
        localStorage.setItem("naruto-quiz", JSON.stringify(data));
        console.log("Naruto Quiz Has Been Stored Locally On Your Machine!");
        alert("Naruto Quiz Has Been Stored Locally On Your Machine!");
      }
    })
    .catch((error) => {
      if (error) {
        alert("Error Loading Quiz Dataset!\n" + error);
      }
    })
);

// function getQuestionAnswer(questionBank) {
//   // convert the .json file into strings
//   // questionBank = JSON.stringify(data);
//   for (var i = 0; i < questionBank[0].quiz.length; i++) {
//     newQBank.push(questionBank[0].quiz[i]);
//   }
// }

// function setQuestionAnswer(bank) {
//   var questionCount = bank.length;
//   console.log("Bank length: " + questionCount);

//   var _question = "";
//   var _answers = [];
//   var _correctAnswer = null;

//   // Populate question and answers

//   // When a choice is made, change bg color to match result green/red

//   // update scoreCard with results

//   // Change question and answers

//   // for (var k = 0; k < newQBank[0].answers.length; k++) {
//   //   console.log("Answer " + k + " " + JSON.stringify(newQBank[0].answers[k]));
//   // }
// }
// test that our questionBank var has the right data type
// once stored in global variable

// save our stringed data into localStorage
// localStorage.setItem("naruto-quiz", stringData);
// var parseData = JSON.parse(localStorage.getItem("naruto-quiz"));

// add event listener to start button

// TODO create event listener for our start button and try parsing/loading the saved data then calls the displayQuiz(quizContainer) to show and populate our question area
start.addEventListener("click", function () {
  parList = JSON.parse(localStorage.getItem("naruto-quiz"));
  if (parList !== null) {
    console.log("Quiz Retrieved From Local Storage");
    alert("Quiz Retrieved From Local Storage");
  } else {
    console.log("Error loading from localStorage");
    alert("Error Loading From localStorage");
  }
  displayQuiz(quizContainer);
});
hide.addEventListener("click", function () {
  hideQuiz(quizContainer);
});
// Call our hideQuiz function to hide the quiz on load
// hideQuiz(quizContainer);

// set quiz container display to none
function hideQuiz(quizContainer) {
  quizContainer.style.display = "none";
}

// to redisplay our quiz container
function displayQuiz(quizContainer) {
  questionHead.setAttribute("style", "color:white;", "font-size:10rem;");
  questionHead.textContent = parList.quiz[0].question;
  a1.setAttribute("style", "color:white;", "font-size:2rem;");
  quizContainer.style.display = "block";
  countdown();
}
// Choose random question and its answers
function randomQuestion() {}

// Hide the container onload
hideQuiz(quizContainer);
