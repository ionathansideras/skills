document.addEventListener('DOMContentLoaded', function(){
   
    let buttons = document.querySelectorAll('button');
    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;
    for(let i = 0; i < buttons.length; i++){
        
        buttons[i].onclick = () => {
            let player = buttons[i].innerHTML;

            let random = Math.floor(Math.random() * 3);
            if (random == 0){
                random = 'Rock'
            }
            else if(random == 1){
                random = 'Paper'
            }
            else{
                random = 'Cissors'
            }

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
                }
            };

            let round = roundWinner(random,player);

            function game(){
                if(round == "Player +1"){
                    playerScore++;
                }
                else if(round == "Computer +1"){
                    computerScore++;
                }
                else{
                    tie++;
                }
            };
            game();

            document.querySelector('#playerScore').innerHTML = `Your Score: ${playerScore}`;
            document.querySelector('#computersScore').innerHTML = `Computer Score: ${computerScore}`;
            document.querySelector('#round').innerHTML = round;
            
            if(playerScore >= 5 || computerScore >= 5){
                if(playerScore > computerScore){
                    document.querySelector('h3').innerHTML = 'You Win!';
                }
                else if(playerScore < computerScore){
                    document.querySelector('h3').innerHTML = 'You Lost!';
                }
                else {
                    document.querySelector('h3').innerHTML = 'Its Tie!';
                }
            }
            
            if(playerScore >= 6 || computerScore >= 6){
                playerScore = 0;
                computerScore = 0;
                document.querySelector('#playerScore').innerHTML = `Your Score: ${playerScore}`;
                document.querySelector('#computersScore').innerHTML = `Computer Score: ${computerScore}`;
                document.querySelector('#round').innerHTML = 'Points';
                document.querySelector('h3').innerHTML = '';
            }
        };
    };
});
