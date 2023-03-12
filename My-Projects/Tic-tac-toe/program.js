const game = function(){

    (function(){
        const main = document.createElement('main');
        for (let i = 0; i < 3*3; i++) {
            const div = document.createElement('div');
            main.appendChild(div);
        }
        const body = document.querySelector('body');
        body.appendChild(main);
    } ());

};
game();
