let count = 0

function plus() {
    count ++;
    let res = document.querySelector('h1');
    res.innerHTML = count;
}


function minus() {
    count -= 1;
    let res = document.querySelector('h1');
    res.innerHTML = count;
}


document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#plus').onclick = plus;
    document.querySelector('#minus').onclick = minus;

    setInterval(plus, 1000);
});