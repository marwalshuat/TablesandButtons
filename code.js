//This function is used to play the game craps on the webpage. When you click the button it "rolls" two dice and tells you if you won, lost, or drew based on the rules of craps.
function playCraps(){   //creating a function to play the game craps on the webpage
    console.log("playCraps() started");     //a log in the console stating that the playCraps() function is activated
        var die1 = Math.ceil(Math.random() * 6);    //selected random number betweeen 0 and 1, multiplied by 6, rounded up and stored in die1
        var die2 = Math.ceil(Math.random() * 6);    //selected random number betweeen 0 and 1, multiplied by 6, rounded up and stored in die2
        var sum = die1 + die2;                      //creating a variable for the sum of die1 and die2
        document.getElementById("die1Res").innerHTML = die1;    //writing in HTML on the webpage what die1 equals
        document.getElementById("die2Res").innerHTML = die2;    //writing in HTML on the webpage what die2 equals
        document.getElementById("sum1Res").innerHTML = sum;     //writing in HTML on the webpage what the sum of die1 and die2 equals
        if (sum == 7 || sum == 11) {            //an if statement that is looking to see if the sum of die1 and die2 is either 7 or 11
            document.getElementById("finalRes").innerHTML =     //writing in HTML "CRAPS - you lose" if the sum is 7 or 11
            "CRAPS - you lose";
        }
        else if (die1 == die2 && die1 % 2 == 0) {       //an else if statement checking to see if both die1 and die2 are the same number
            document.getElementById("finalRes").innerHTML =     //writing in HTML "DOUBLES - you win" if die1 and die2 are the same number
            "DOUBLES - you win";
        } else {
            document.getElementById("finalRes").innerHTML =     //an else statement that writes in HTML "DRAW - you did not win or lose, please try again." if the dice dont align with the previous if and else if statements
            "DRAW - you did not win or lose, please try again.";
        } 
}

//This function is used to start a counting sequence. When you click the start button it counts down from 50 by 5 to 0 and then says "Blastoff!".
function blastOff(){    //creating a function to count down from 50
    var currTime = 50;  //creating a variable for the starting time
    document.getElementById("countDownTimer").innerHTML = currTime;     //retriving the countDownTimer id from the index 
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 5000);       //it takes 5 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 10000);      //it takes 10 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 15000);      //it takes 15 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 20000);      //it takes 20 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 25000);      //it takes 25 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 30000);      //it takes 30 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 35000);      //it takes 35 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 40000);      //it takes 40 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 45000);      //it takes 45 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";      //the new currTime is written in HTML by the countDowwnTimer, it is zero so the countDonwTimer says "Blastoff!"
    }, 50000);      //it takes 50 seconds to show the new currTime
}

function btrBlastOff(){
    console.log("btrBlastOff started");
    var currTime = 50; 
    for(var i = 0; i <= 10; i = i + 1){
        setTimeout(function(){
            if(currTime > 25){
                document.getElementById("countDownTimer").innerHTML = currTime;
            } else if (currTime == 0) {
                document.getElementById("countDownTimer").innerHTML = "Blastoff!";
            } else {
                document.getElementById("countDownTimer").innerHTML = 
                "Warning Less than ½ way to launch, time left = " + currTime;
            }
            currTime = currTime - 5;
        },5000 * i);

    }

}

function start(){
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}