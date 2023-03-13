// creates the gameboard
const board = (function(){
    const gameboard = ['','','','','','','','',''];
    return {gameboard};
}());

// creates a player
const player = function(name, letter){
    return {name, letter};
};

const player1 = player('bob', 'x');
const player2 = player('carl', 'o');

// controls the flow of the game 
const flow = (function(player1, player2){
    let score = 0;

        
     
})();

// display the board in the screen
function display(e){
    for(let i = 0; i < e.gameboard.length; i++){
        const main = document.querySelector('main');
        const div = document.createElement('div');
        div.innerHTML = e.gameboard[i];
        div.setAttribute('value', i);
        main.appendChild(div); 
    }
    
    const check = document.querySelectorAll('div');
    check.forEach(function(button){
        button.addEventListener('click', function(){
            let butVal = button.getAttribute('value');
            console.log(butVal);
            board.gameboard[butVal] = butVal;
            clear();
            display(board);
        });
    });
};
display(board);

// it clears the screen
function clear(){
    const div = document.querySelectorAll("div");
    for (let i = 0; i < div.length; i++) {
    div[i].remove();
  }
};

