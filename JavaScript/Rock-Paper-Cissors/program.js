//it return a random value from the computer
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    if (random == 0){
        random = 'rock'
    }
    else if(random == 1){
        random = 'paper'
    }
    else{
        random = 'cissors'
    }
    return random;
};

//asks the player for a value
function playersChoice(){
    let playersinput = prompt("Rock Paper Cissors!");
    return playersinput;
};

//it returns a winner of one round
function playRound(computerSelection, playerSelection){
    let playerinput = playerSelection.toLowerCase();
    let computerValue = computerSelection;
    //it returns who won this round
    if(computerValue == 'paper' && playerinput == 'paper'){
        return "this is a tie!";
    }
    else if(computerValue == 'rock' && playerinput == 'rock'){
        return "this is a tie!";
    }
    else if(computerValue == 'cissors' && playerinput == 'cissors'){
        return "this is a tie!";
    }
    else if(computerValue == 'cissors' && playerinput == 'rock'){
        return "Computer +1";
    }
    else if(computerValue == 'rock' && playerinput == 'cissors'){
        return "Player +1";
    }
    else if(computerValue == 'rock' && playerinput == 'paper'){
        return "Player +1";
    }
    else if(computerValue == 'paper' && playerinput == 'rock'){
        return "Computer +1";
    }
    else if(computerValue == 'paper' && playerinput == 'cissors'){
        return "Player +1";
    }
    else if(computerValue == 'cissors' && playerinput == 'paper'){
        return "Computer +1";
    }
};

//this function creates a 5 round game and declares a winner!!!
function game(){
    //veriables to keep track of points
    let computerCount = 0;
    let playerCount = 0;

    //it runs the playerRound function 5 times
    for(let i = 1; i <= 5; i++){

        // i call those functions inside the for loop paseed in to veriables becuse i need them to run 5 times 
        let computerSelection = getComputerChoice();
        let playerSelection = playersChoice();
        let track = playRound(computerSelection, playerSelection);

        if(track === "Computer +1"){
            //add a point for the computer
            computerCount++;
        }
        else if(track === "Player +1"){
            //add a point for the player
            playerCount++;
        }
        
        console.log(`Round ${i}:`,`Player ${playerCount} - ${computerCount} Computer`,` = ${track}`);
    }

    //checks who has more points and returns a winner 
    if(computerCount > playerCount){
        console.log('Computer Wins!');
    }
    else if(computerCount < playerCount){
        console.log('You Win!');
    }
    else {
        console.log('Its Tie!');
    }

    console.log(`Final score: Player ${playerCount} - ${computerCount} Computer`);
};

//call the game function
game();