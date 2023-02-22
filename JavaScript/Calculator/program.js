document.addEventListener('DOMContentLoaded', function(){
    
    let count = '';
    let holder = 0;
    let buttons = document.querySelectorAll('#num');
    let bool;

    document.querySelector('h1').innerHTML = holder;

    for( let i = 0; i < buttons.length; i++){
        buttons[i].onclick = function() {
            let number = buttons[i].innerHTML;
            count += number;
            document.querySelector('h1').innerHTML = count;
        };
    };

    document.querySelector('.clear').onclick = function(){
        count = '';
        document.querySelector('h1').innerHTML = '0';
    };

    document.querySelector('.results').onclick = function(){

        if (document.querySelector('h1').innerHTML == holder){
            document.querySelector('h1').innerHTML == holder;
        }

        else if(count == "0/0" || count == "00/0" || count == "000/0" || count == "0000/0"){
            document.querySelector('h1').innerHTML = "Error";
        }

        else if (document.querySelector('h1').innerHTML == count){
            try {
                eval(count);
                count = eval(count);
                document.querySelector('h1').innerHTML = count;
              }
            catch (error) {
                document.querySelector('h1').innerHTML = "Error";
              }           
        } 

        if (count == Infinity){
            document.querySelector('h1').innerHTML = "Error";
            count = '';
        } 

      
    };
    
    
});