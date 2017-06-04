var correctCounter = 0;
var incorrectCounter = 0;
var unfinishedCounter = 0;

var number = 10;
var intervalId;

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

