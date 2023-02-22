document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('form').onsubmit = function(){
        const name = document.querySelector('#Name').value;
        alert(`hello ${name}!`);
    };
});