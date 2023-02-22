// add event listener
document.addEventListener('DOMContentLoaded', function(){

    // dialegei ola ta button kai trexei to funtion, for each button
    document.querySelectorAll('.koko').forEach(function(button){
        //on click trexei afto to function
        button.onclick = function(){
            //dialegei to change kai tou allazei color simfona me to data-color
            document.querySelector('#change').style.color = button.dataset.color;
        }
    });
});