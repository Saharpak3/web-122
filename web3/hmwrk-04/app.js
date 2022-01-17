var score = [0,0];
var result;
var playerScore = document.getElementById("playerScore");
var computerScore = document.getElementById("computerScore");
var round = document.getElementById("round");
var accidently;
//rock
function rock(){
    round++;
    rand=Math.floor(Math.random() * 3);
    result=0;

    if(rand == 0){
        alert("rock");
      document.getElementById('$Result').innerText="equal";
      

    }
    else if(rand == 1){
    alert("paper");
    computerScore++;
    document.getElementById('$Result').innerText="computer win :(";
    document.getElementById('$computerScore').innerText=computerScore;
    }
    else{
        alert("scissors");
        playerScore++;
    document.getElementById('$Result').innerText="you win :D";
    document.getElementById('$playerScore ').innerText=playerScore;
    }
    document.getElementById("$round").innerText=round;
}

//paper
function paper(){
    round++;
    rand=Math.floor(Math.random() * 3);
    result=1;

    if(rand == 1){
        alert("paper");
      document.getElementById('$Result').innerText="equal";
      

    }
    else if(rand == 2){
        alert("scissors");
        computerScore++;
    document.getElementById('$Result').innerText="computer win :(";
    document.getElementById('$computerScore').innerText=computerScore ;
    }
    else{
        alert("rock");
        playerScore++;
    document.getElementById('$Result').innerText="you win :D";
    document.getElementById('$playerScore ').innerText=playerScore ;
    }
    document.getElementById("$round").innerText=round;
}

//scissors
function scissors(){
    round++;
    rand=Math.floor(Math.random() * 3);
    result=2;

    if(rand == 2){
        alert("scissors");
      document.getElementById('$Result').innerText="equal";
      

    }
    else if(rand == 0){
    alert("rock");
    computerScore++;
    document.getElementById('$Result').innerText="computer win :(";
    document.getElementById('$computerScore').innerText=computerScore;
    }
    else{
        alert("paper");
        playerScore++;
    document.getElementById('$Result').innerText="you win :D";
    document.getElementById('$playerScore').innerText=playerScore;
    }
    document.getElementById("$round").innerText=round;
}