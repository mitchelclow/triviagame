$(document).ready(function() {

var correctCounter = 0;
var incorrectCounter = 0;
var unfinishedCounter = 0;
var startButton = ".button";
var doneButton = $("<button id='buttonForDone'>Done</button>");

var number = 120;
var intervalId;

var theWordTrue = "True";
var theWordFalse = "False";

var firstQuestion = "<b>1. Colorado is the only state in history to turn down the Olympics.</b>";
var firstQuestionTrue = $("<input type='radio' name='factOne' id='factOneTrue' value='True' />");
var firstQuestionFalse= $("<input type='radio' name='factOne' id='factOneFalse' value='False' />");

var secondQuestion = "<b>2. Denver lays claim to the invention of the cheeseburger.</b>";
var secondQuestionTrue = $("<input type='radio' name='factTwo' id='factTwoTrue' value='True' />");
var secondQuestionFalse= $("<input type='radio' name='factTwo' id='factTwoFalse' value='False' />");

var thirdQuestion = "<b>3. State animal: The Rocky Mountain Elk.</b>";
var thirdQuestionTrue = $("<input type='radio' name='factThree' id='factThreeTrue' value='True' />");
var thirdQuestionFalse= $("<input type='radio' name='factThree' id='factThreeFalse' value='False' />");

var forthQuestion = "<b>4. Colorado contains 75% of the land area of the U.S. with an altitude over 10,000 feet.</b>";
var forthQuestionTrue = $("<input type='radio' name='factFour' id='factFourTrue' value='True' />");
var forthQuestionFalse= $("<input type='radio' name='factFour' id='factFourFalse' value='False' />");

var fifthQuestion = "<b>5. Colorado has the highest literacy rate in the nation.</b>";
var fifthQuestionTrue = $("<input type='radio' name='factFive' id='factFiveTrue' value='True' />");
var fifthQuestionFalse= $("<input type='radio' name='factFive' id='factFiveFalse' value='False' />");


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

	$("#thirdQuestion").html(thirdQuestion);
	$("#thirdQuestionTrue").append(thirdQuestionTrue);
	$(".true").html(theWordTrue);
	$("#thirdQuestionFalse").append(thirdQuestionFalse);
	$(".false").html(theWordFalse);

	$("#forthQuestion").html(forthQuestion);
	$("#forthQuestionTrue").append(forthQuestionTrue);
	$(".true").html(theWordTrue);
	$("#forthQuestionFalse").append(forthQuestionFalse);
	$(".false").html(theWordFalse);

	$("#fifthQuestion").html(fifthQuestion);
	$("#fifthQuestionTrue").append(fifthQuestionTrue);
	$(".true").html(theWordTrue);
	$("#fifthQuestionFalse").append(fifthQuestionFalse);
	$(".false").html(theWordFalse);

	$(".done").append(doneButton);



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


        if(document.getElementById('factOneTrue').checked) {
       	$(".wincount").append(correctCounter++)
  		
		}
		if(document.getElementById('factTwoFalse').checked) {
		$(".losecount").append(incorrectCounter++)
 	 
}
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