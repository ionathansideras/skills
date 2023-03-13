// creates the board
const gameBoard = (function(){
    let Gameboard = ['','','','','','','','',''];
    return {Gameboard};
}());

// creates the players
const players = function(name, e){
    // methods to get name and X or O
    const getName = () => name;
    const getE = () => e;

    return {getE, getName};
}

//dysplayes everything in the screen
function display(e){
    for(let i = 0; i < e.Gameboard.length; i++){
        const main = document.querySelector('main');
        const div = document.createElement('div');
        div.innerHTML = e.Gameboard[i];
        div.setAttribute('value', i);
        main.appendChild(div); 
    }
    check();
}
display(gameBoard);

const player1 = players('bob', 'x');
const player2 = players('carl', 'o');
let flag = true;

// when on click something happends
function check(){
    const check = document.querySelectorAll('div');
    check.forEach(function(button){
       
        button.addEventListener('click', function(){
            let butVal = button.getAttribute('value');
            //puts the players marker in the gameboard
            if ((gameBoard.Gameboard[butVal] == '') && flag == true){
                gameBoard.Gameboard[butVal] = player1.getE();
                console.log(gameBoard.Gameboard[butVal]);
                flag = false;
            }
            if ((gameBoard.Gameboard[butVal] == '') && flag == false){
                gameBoard.Gameboard[butVal] = player2.getE();
                console.log(gameBoard.Gameboard[butVal]);
                flag = true;
            }
            getWinner();
            //clears everything
            clear();
            //display the new updated board
            display(gameBoard);
        });
    });
}

function getWinner(){
    if ((gameBoard.Gameboard[0] && gameBoard.Gameboard[3] && gameBoard.Gameboard[6])  == 'x'){
        console.log('ok');
    }
    if ((gameBoard.Gameboard[0] && gameBoard.Gameboard[3] && gameBoard.Gameboard[6])  == 'o'){
        console.log('ok');
    }
    //
    if ((gameBoard.Gameboard[0] && gameBoard.Gameboard[1] && gameBoard.Gameboard[2])  == 'x'){
        console.log('ok');
    }
    if ((gameBoard.Gameboard[0] && gameBoard.Gameboard[1] && gameBoard.Gameboard[2])  == 'o'){
        console.log('ok');
    }
    //
    if ((gameBoard.Gameboard[2] && gameBoard.Gameboard[5] && gameBoard.Gameboard[8])  == 'x'){
        console.log('ok');
    }
    if ((gameBoard.Gameboard[2] && gameBoard.Gameboard[5] && gameBoard.Gameboard[8])  == 'o'){
        console.log('ok');
    }
    //
    if ((gameBoard.Gameboard[6] && gameBoard.Gameboard[7] && gameBoard.Gameboard[8])  == 'x'){
        console.log('ok');
    }
    if ((gameBoard.Gameboard[6] && gameBoard.Gameboard[7] && gameBoard.Gameboard[8])  == 'o'){
        console.log('ok');
    }
    //
    if ((gameBoard.Gameboard[0] && gameBoard.Gameboard[4] && gameBoard.Gameboard[8])  == 'x'){
        console.log('ok');
    }
    if ((gameBoard.Gameboard[0] && gameBoard.Gameboard[4] && gameBoard.Gameboard[8])  == 'o'){
        console.log('ok');
    }
    //
    if ((gameBoard.Gameboard[2] && gameBoard.Gameboard[4] && gameBoard.Gameboard[6])  == 'x'){
        console.log('ok');
    }
    if ((gameBoard.Gameboard[2] && gameBoard.Gameboard[4] && gameBoard.Gameboard[6])  == 'o'){
        console.log('ok');
    }

};

// it clears the screen
function clear(){
    const div = document.querySelectorAll("div");
    for (let i = 0; i < div.length; i++) {
    div[i].remove();
  }
};

