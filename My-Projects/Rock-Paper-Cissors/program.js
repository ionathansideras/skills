document.addEventListener('DOMContentLoaded', function(){
   
    let buttons = document.querySelectorAll('button');
    let playerScore = 0;
    let computerScore = 0;
    let random;
    let round;
    let player;

    // this function resets the veriables at the end of the game
    function resetGame(){
        playerScore = 0;
        computerScore = 0;
        document.querySelector('#playerScore').innerHTML = `Your Score: ${playerScore}`;
        document.querySelector('#computersScore').innerHTML = `Computer Score: ${computerScore}`;
        document.querySelector('#round').innerHTML = 'Points';
    };

    // this function choose a winner 
    function winner(){
        if(playerScore == 5 || computerScore == 5){

            if(playerScore == 5){
                document.querySelector('h3').innerHTML = 'You Win!';
                resetGame()
            }

            else if(computerScore == 5){
                document.querySelector('h3').innerHTML = 'You Lost!';
                resetGame()
            }
        };
    };

    // this function returns a winner of one round
    function roundWinner(playerinput,computerSelection){
        let computerValue = computerSelection;
        //it returns who won this round
        if(computerValue == 'Paper' && playerinput == 'Paper'){
            return "Tie";
        }
        else if(computerValue == 'Rock' && playerinput == 'Rock'){
            return "Tie";
        }
        else if(computerValue == 'Cissors' && playerinput == 'Cissors'){
            return "Tie";
        }
        else if(computerValue == 'Cissors' && playerinput == 'Rock'){
            return "Computer +1";
        }
        else if(computerValue == 'Rock' && playerinput == 'Cissors'){
            return "Player +1";
        }
        else if(computerValue == 'Rock' && playerinput == 'Paper'){
            return "Player +1";
        }
        else if(computerValue == 'Paper' && playerinput == 'Rock'){
            return "Computer +1";
        }
        else if(computerValue == 'Paper' && playerinput == 'Cissors'){
            return "Player +1";
        }
        else if(computerValue == 'Cissors' && playerinput == 'Paper'){
            return "Computer +1";
        };
    };

    // this finction gets a random value from the computer
    function randomValue(){
        random = Math.floor(Math.random() * 3);
        if (random == 0){
            random = 'Rock'
        }
        else if(random == 1){
            random = 'Paper'
        }
        else{
            random = 'Cissors'
        };
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
        document.querySelector('#computersScore').innerHTML = `Computer Score: ${computerScore}`;
        document.querySelector('#round').innerHTML = round;
    };

    //
    for(let i = 0; i < buttons.length; i++){

        // then a button is clicked an anonymous function will be executed
        buttons[i].onclick = function(){
            
            //runs all the above funtions 
            player = buttons[i].innerHTML;
            randomValue();
            round = roundWinner(random,player);
            game();
            update();
            winner();
        };
    };
});
