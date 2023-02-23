document.addEventListener('DOMContentLoaded', function(){
   
    let buttons = document.querySelectorAll('img');
    let playerScore = 0;
    let computerScore = 0;
    let round;
    let player;
    let randomV;

    // this function resets the veriables at the end of the game
    function resetGame(){
        playerScore = 0;
        computerScore = 0;
        document.querySelector('#playerScore').innerHTML = `You: ${playerScore}`;
        document.querySelector('#computersScore').innerHTML = `Computer: ${computerScore}`;
        document.querySelector('#round').innerHTML = 'Points';
    };

    // this function choose a winner 
    function winner(){
        if(playerScore == 5 || computerScore == 5){

            if(playerScore == 5){
                document.querySelector('h3').innerHTML = 'You Won!';
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
        
        //it returns who won this round
        if(computerSelection == 'Paper' && playerinput == 'Paper'){
            return "Tie";
        }
        else if(computerSelection == 'Rock' && playerinput == 'Rock'){
            return "Tie";
        }
        else if(computerSelection == 'Cissors' && playerinput == 'Cissors'){
            return "Tie";
        }
        else if(computerSelection == 'Cissors' && playerinput == 'Rock'){
            return "Player +1";
        }
        else if(computerSelection == 'Rock' && playerinput == 'Cissors'){
            return "Computer +1";
        }
        else if(computerSelection == 'Rock' && playerinput == 'Paper'){
            return "Player +1";
        }
        else if(computerSelection == 'Paper' && playerinput == 'Rock'){
            return "Computer +1";
        }
        else if(computerSelection == 'Paper' && playerinput == 'Cissors'){
            return "Player +1";
        }
        else if(computerSelection == 'Cissors' && playerinput == 'Paper'){
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
            random = 'Cissors'
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
        document.querySelector('#playerScore').innerHTML = `You: ${playerScore}`;
        document.querySelector('#computersScore').innerHTML = `Computer: ${computerScore}`;
        document.querySelector('#round').innerHTML = round;
    };

    //
    for(let i = 0; i < buttons.length; i++){

        // then a button is clicked an anonymous function will be executed
        buttons[i].onclick = function(){
            
            //runs all the above funtions 
            player = buttons[i].getAttribute('value');
            randomV = randomValue();
            round = roundWinner(player,randomV);
            game();
            update();
            winner();

            console.log("myschoice",player)
            console.log("randomV",randomV)
            console.log("round winner",round)
        };
    };
});
