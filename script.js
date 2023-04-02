// Create all of our variables
var isSaved = "nqa-saved";

// create a function that will store the quiz data into the localStorage and it will
// validate (check to see) if the data has already been saved to the localStorage

// use the fetch() function to load our JSON file. fetch requests the data,
// the first then() gets the promise of getting that data, then parses it
// if its there, then the next then() gives us access to that data in our code
// we then convert it from a JSON object to string
// lastly if we cant fetch our data then we throw an error with the details
var quiz = fetch("./assets/question-answer-bank.json").then((response) =>
  response
    .json()
    .then((data) => {
      // convert the .json file into strings
      var stringData = JSON.stringify(data);
      // save our stringed data into localStorage
      localStorage.setItem("naruto-quiz", stringData);
      // convert/parse from string to json object
      var parseData = JSON.parse(localStorage.getItem("naruto-quiz"));
      // log and test our data was properly converted
      console.log(parseData);
      alert(
        "Naruto Quiz Questions & Answers have been requested, converted, saved, and retrieved"
      );
    }) //the function to store in local storage goes here instead of the console.log
    .catch((error) => {
      if (error) {
        alert("Error Loading Quiz Dataset!\n" + error);
      }
    })
);
// Grab all of our elements
var quizContainer = document.querySelector(".quiz");
var main = document.querySelector("main");
var start = document.querySelector("#start");

// add event listener to start button so we can go fullscreen
// for testing purposes only
start.addEventListener("click", document.body.requestFullscreen);

// Call our hideQuiz function to hide the quiz on load
hideQuiz(quizContainer);

// set quiz container display to none
function hideQuiz(quizContainer) {
  quizContainer.style.display = "none";
}

// to redisplay our quiz container
function displayQuiz(quizContainer) {
  container.style.display = "block";
}
