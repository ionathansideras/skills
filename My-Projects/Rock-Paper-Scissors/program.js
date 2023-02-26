let buttons = document.querySelectorAll('img');
let playerScore = 0;
let computerScore = 0;
let round;
let player;
let roundCound = 0;
let randomV;
let helper;

// it makes the button invisible and disables
document.querySelector('button').style.opacity = '0';
document.querySelector('button').disabled = true;

//on click it makes it invisible and it reset the game. and it says that buttons = img
document.querySelector('button').onclick = () => {
    document.querySelector('button').style.opacity = '0';
    resetGame();
    buttons = document.querySelectorAll('img');
};

// this function resets the veriables at the end of the game
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    roundCound = 0;
    document.querySelector('#playerScore').innerHTML = `Your Score: ${playerScore}`;
    document.querySelector('.helper').innerHTML = 'Click a hand to get started';
    document.querySelector('#computersScore').innerHTML = `Computers Score: ${computerScore}`;
    document.querySelector('#round').innerHTML = 'Round: '+roundCound;
    document.querySelector('button').disabled = true;
};

// this function choose a winner 
function winner(){
    if(playerScore == 5 || computerScore == 5){

        if(playerScore == 5){
            document.querySelector('button').innerHTML = 'You Won! Play Again!';
            document.querySelector('button').style.opacity = '1';
            // it makes the buttons veriable = 0 so the user cant play after the game is over
            buttons = 0;
            // it anables the button
            document.querySelector('button').disabled = false;
        }

        else if(computerScore == 5){
            document.querySelector('button').innerHTML = 'You Lost! Play Again!';
            document.querySelector('button').style.opacity = '1';
            // it makes the buttons veriable = 0 so the user cant play after the game is over
            buttons = 0;
            document.querySelector('button').disabled = false;
        }
    };
};

// this function returns a winner of one round
function roundWinner(playerinput,computerSelection){
    
    //it returns who won this round
    if(computerSelection == 'Paper' && playerinput == 'Paper'){
        helper = 'Paper and Paper = Tie';
        roundCound++;
        return "Tie";
    }
    else if(computerSelection == 'Rock' && playerinput == 'Rock'){
        helper = 'Rock and Rock = Tie';
        roundCound++;
        return "Tie";
    }
    else if(computerSelection == 'Scissors' && playerinput == 'Scissors'){
        helper = 'Scissors and Scissors = Tie';
        roundCound++;
        return "Tie";
    }
    else if(computerSelection == 'Scissors' && playerinput == 'Rock'){
        helper = 'Yay Rock beats Scissors';
        roundCound++;
        return "Player +1";
    }
    else if(computerSelection == 'Rock' && playerinput == 'Scissors'){
        helper = 'Oops Rock beats Scissors';
        roundCound++;
        return "Computer +1";
    }
    else if(computerSelection == 'Rock' && playerinput == 'Paper'){
        helper = 'Yay Paper beats Rock';
        roundCound++;
        return "Player +1";
    }
    else if(computerSelection == 'Paper' && playerinput == 'Rock'){
        helper = 'Oops Paper beats Rock';
        roundCound++;
        return "Computer +1";
    }
    else if(computerSelection == 'Paper' && playerinput == 'Scissors'){
        helper = 'Yay Scissors beats Paper';
        roundCound++;
        return "Player +1";
    }
    else if(computerSelection == 'Scissors' && playerinput == 'Paper'){
        helper = 'Oops Scissors beats Paper';
        roundCound++;
        return "Computer +1";
    };
};

// this finction gets a random value from the computer
function randomValue(){
    let random = Math.floor(Math.random() * 3);
    if (random == 0){
        random = 'Rock'
    }
    else if(random == 1){
        random = 'Paper'
    }
    else{
        random = 'Scissors'
    };
    
    return random;
};

// this funtion creates updates the veriables when someone gets apoint 
function game(){
    if(round == "Player +1"){
        playerScore++;
    }
    else if(round == "Computer +1"){
        computerScore++;
    };
};        

// updates the DOM with the curent veriables
function update(){
    document.querySelector('#playerScore').innerHTML = `Your Score: ${playerScore}`;
    document.querySelector('#computersScore').innerHTML = `Computers Score: ${computerScore}`;
    document.querySelector('#round').innerHTML = 'Round: '+roundCound;
    document.querySelector('.helper').innerHTML = helper;
};

// for each button
for(let i = 0; i < buttons.length; i++){

    // when a button is clicked an anonymous function will be executed
    buttons[i].onclick = function(){
        
        //runs all the above funtions 
        player = buttons[i].getAttribute('value');
        randomV = randomValue();
        round = roundWinner(player,randomV);
        game();
        update();
        winner();
    };
};

