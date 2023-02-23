document.addEventListener('DOMContentLoaded', function(){

    let buttons = document.querySelectorAll('img');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].onclick = function(){
            player = buttons[i].getAttribute('value');
            console.log(player);
        }
    }
})
