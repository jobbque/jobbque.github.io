var question1Answer = "";
var question2Answer = "";
var question3Answer = "";

var numberOfQuestions = 3;
var numberOfCorrectAnswers = 0;

$(document).ready(function() {
  // Handler for .ready() called.

  //http://jsfiddle.net/s5EE3/2/

    printQuestion(question1);
    
    $("#square2").hide();
    $("#square3").hide();

    $( "#square" ).click(function() {

      /*$("#square").animate({
        left:'250px',
        height:'+=150px',
        width:'+=150px'
      });*/

      if ($('#buttonA').is(':checked')) {
        question1Answer = question1.answer1;
      } else if ($('#buttonB').is(':checked')) {
        question1Answer = question1.answer2;
      } else if ($('#buttonC').is(':checked')) {
        question1Answer = question1.answer3;
      } else if ($('#buttonD').is(':checked')) {
        question1Answer = question1.answer4;
      }

      if (question1Answer === question1.correctAnswer) {
        numberOfCorrectAnswers++;
      }

      //$("#questionOneAnswer").append(question1Answer);
      //$("#numberCorrect").append(numberOfCorrectAnswers);

      $("#square").slideDown().fadeOut();
      $("#question").empty();

      printQuestion(question2);    

      $("#square2").show();
      $("#square3").hide();

    }); 


    $( "#square2" ).click(function() {

     if ($('#buttonA').is(':checked')) {
        question2Answer = question2.answer1;
      } else if ($('#buttonB').is(':checked')) {
        question2Answer = question2.answer2;
      } else if ($('#buttonC').is(':checked')) {
        question2Answer = question2.answer3;
      } else if ($('#buttonD').is(':checked')) {
        question2Answer = question2.answer4;
      }

      if (question2Answer === question2.correctAnswer) {
        numberOfCorrectAnswers++;
      }

      //$("#questionTwoAnswer").append(question2Answer);
      //$("#numberCorrect").append(numberOfCorrectAnswers);


      $("#square2").remove();
      $("#question").empty();

      printQuestion(question3);

      $("#square3").show();

    });

    $( "#square3" ).click(function() {

     if ($('#buttonA').is(':checked')) {
        question3Answer = question3.answer1;
      } else if ($('#buttonB').is(':checked')) {
        question3Answer = question3.answer2;
      } else if ($('#buttonC').is(':checked')) {
        question3Answer = question3.answer3;
      } else if ($('#buttonD').is(':checked')) {
        question3Answer = question3.answer4;
      }

      if (question3Answer === question3.correctAnswer) {
        numberOfCorrectAnswers++;
      }

      //$("#questionThreeAnswer").append(question3Answer);

      $("#numberCorrect").append("Number of Correct Answers: "+numberOfCorrectAnswers);


      $("#square3").remove();
      $("#question").empty();

    });

});

function Question(question, answer1, answer2, answer3, answer4, correctAnswer) {
  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.answer4 = answer4;
  this.correctAnswer = correctAnswer;
}

function printQuestion (question) {
  $("#question").append("<div>"+question.question+"</div>");
  $("#question").append("<div><input id='buttonA' type='radio' name='answer' value=" + question.answer1 + ">A. " + question.answer1 + "</div>");
  $("#question").append("<div><input id='buttonB' type='radio' name='answer' value=" + question.answer2 + ">B. " + question.answer2 + "</div>");
  $("#question").append("<div><input id='buttonC' type='radio' name='answer' value=" + question.answer3 + ">C. " + question.answer3 + "</div>");
  $("#question").append("<div><input id='buttonD' type='radio' name='answer' value=" + question.answer4 + ">D. " + question.answer4 + "</div>");
  //$("#question").append("<input id='clickMe' type='submit' value='Submit'>");
}

question1 = new Question("What is the highest grossing film (world-wide) of all time?", "ET", "The Dark Knight", "Avatar", "Titanc", "Avatar");
question2 = new Question("What Brad Pitt's highest grossing film?", "Ocean's 11", "Ocean's 12", "World War Z", "Mr. & Mrs. Smith", "World War Z");
question3 = new Question("Which one of these films did not gross over 1 billion dollars?", "The Lion King", "Skyfall", "Toy Story 3", "Marvel's The Avengers", "The Lion King");

allQuestions = [question1, question2, question3];