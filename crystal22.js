
// A $( document ).ready() block.
$( document ).ready(function() {

//list of variables for keeping score 
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var goalNum = Math.floor(Math.random() * 120) + 19;
    
//random number generator for goalNumber
    $('#goalNum').text(goalNum);  

//random number generator for crystals
    var redCrystal = Math.floor(Math.random() * 12) + 1;
    var blueCrystal = Math.floor(Math.random() * 12) + 1;
    var yellowCrystal = Math.floor(Math.random() * 12) + 1;
    var greenCrystal = Math.floor(Math.random() * 12) + 1;

//////onclick event for buttons red
    $("#red").on("click", function() {
        var red = redCrystal;
        totalScore = totalScore + red;
        $('#totalScore' ).text(totalScore);
        console.log(red);
        trackScore();
    });

//////onclick event for blue button
    $("#blue").on("click", function() {
        var blue = blueCrystal;
        totalScore = totalScore + blue;
        $("#totalScore" ).text(totalScore);
        console.log(blue);
        trackScore();
    });

//////onclick event for yellow button
    $("#yellow").on("click", function() {
        var yellow = yellowCrystal;
        totalScore = totalScore + yellow;
        $("#totalScore" ).text(totalScore);
        console.log(yellow);
        trackScore();
    });

//////onclick event for green button
    $("#green").on('click', function() {
        var green = greenCrystal;
        totalScore = totalScore + green;
        $("#totalScore" ).text(totalScore);
        console.log(green);
        trackScore();
    });


//////if else statement that awards points & 
    function trackScore() {
        if (totalScore === goalNum) {
            wins++;
            console.log("wins");
            award();
            reset();


        }
        else if (totalScore > goalNum) {
            losses++;
            console.log("losses");
            award();
            reset();
             
        }
    } 
//////this is the function displays score      
    function award() {
         var html = "<p>Wins:" + wins + "</p>" +
         "<p>Losses: " + losses + "</p>";

         document.querySelector("#score").innerHTML = html;
    }
    
   function reset() {
            totalScore = 0;
            goalNum = Math.floor(Math.random() * 120) + 19;
            $('#goalNum').text(goalNum);  
            redCrystal = Math.floor(Math.random() * 12) + 1;
            blueCrystal = Math.floor(Math.random() * 12) + 1;
            yellowCrystal = Math.floor(Math.random() * 12) + 1;
            greenCrystal = Math.floor(Math.random() * 12) + 1;

   }
});
