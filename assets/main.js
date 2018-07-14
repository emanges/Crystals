$(document).ready(function() {


var totalScore = 0;
var wins=0;
losses=0;

var snickersNum= Math.floor(Math.random() * 12); 
var advilNum= Math.floor(Math.random() * 12); 
var gumNum= Math.floor(Math.random() * 12); 
var papertowelsNum= Math.floor(Math.random() * 12); 


var computerRandom= Math.floor(Math.random() * 120); 
$("#computerTotal").append(computerRandom);  

    $("#advil").on("click", function() {
        totalScore= totalScore + advilNum;
        $("#score").html(totalScore);
        if (totalScore === computerRandom) {
            win();
        }
    
        else if (totalScore > computerRandom) {
        lose();
    }

    })
    
    $("#snickers").on("click", function() {
        totalScore= totalScore + snickersNum;
        $("#score").html(totalScore);
        if (totalScore === computerRandom) {
            win();
    }
        else if (totalScore > computerRandom) {
            lose();
    }
    })
    
    $("#gum").on("click", function() {
        totalScore= totalScore + gumNum;
        $("#score").html(totalScore);
        if (totalScore === computerRandom) {
            win();
    }
    
        else if (totalScore > computerRandom) {
            lose();
    }
    })
    
    $("#papertowels").on("click", function() {
        totalScore= totalScore + papertowelsNum;
        $("#score").html(totalScore);
        if (totalScore === computerRandom) {
            win();
    }
    else if (totalScore > computerRandom) {
           lose();
    }
    })

   function win(){
     wins++;
     alert("You Win!");
     $("#wins").text("Wins:" + wins);
     reset();
    };

    function lose(){
      losses++;
      alert("Sorry, you lose!")
      $("#losses").text("Losses:" + losses);
      reset();
    };

    function reset(){
        totalScore = 0;
        computerRandom= Math.floor(Math.random() * 120);

        $("#computerTotal").text(computerRandom);
        $("#score").text(totalScore);

        snickersNum= Math.floor(Math.random() * 12); 
        advilNum= Math.floor(Math.random() * 12); 
        gumNum= Math.floor(Math.random() * 12); 
        papertowelsNum= Math.floor(Math.random() * 12); 

    }

});