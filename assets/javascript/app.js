$(document).ready(function() {

var correctCounter = 0;
var incorrectCounter = 0;
var unfinishedCounter = 0;
var startButton = ".button";

var number = 2;
var intervalId;

var theWordTrue = "True";
var theWordFalse = "False";

var firstQuestion = "<b>1. Colorado is the only state in history to turn down the Olympics.</b>";
var firstQuestionTrue = $("<input type='radio' name='factOne' id='factOneTrue' value='True' />");
var firstQuestionFalse= $("<input type='radio' name='factOne' id='factOneFalse' value='False' />");

var secondQuestion = "<b>2. Denver lays claim to the invention of the cheeseburger.</b>";
var secondQuestionTrue = $("<input type='radio' name='factTwo' id='factTwoTrue' value='True' />");
var secondQuestionFalse= $("<input type='radio' name='factTwo' id='factTwoFalse' value='False' />");

$(".button").on("click", function() {

	$("#firstQuestion").html(firstQuestion);
	$("#firstQuestionTrue").append(firstQuestionTrue);
	$(".true").html(theWordTrue);
	$("#firstQuestionFalse").append(firstQuestionFalse);
	$(".false").html(theWordFalse);

	$("#secondQuestion").html(secondQuestion);
	$("#secondQuestionTrue").append(secondQuestionTrue);
	$(".true").html(theWordTrue);
	$("#secondQuestionFalse").append(secondQuestionFalse);
	$(".false").html(theWordFalse);


 	function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $(".timer").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        $(".wincount").html("Answered correctly: " + correctCounter);
        $(".losecount").html("Answered incorrectly: " + incorrectCounter);
        $(".unansweredcount").html("Unanswered: " + unfinishedCounter);
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

})

});