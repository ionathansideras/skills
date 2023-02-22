// elenxi an iparxei locAL STorage
if(!localStorage.getItem('count')){
    // an den iparxei bazei thn timi tou count sto 0
    localStorage.setItem('count', 0);
}

function plus() {
    // vazei sto count tin timi pou idi iparxei sto local storage
    let count = localStorage.getItem('count');
    count ++;
    let res = document.querySelector('h1');
    res.innerHTML = count;
    //ananeonei tin timi tou local storage me thn timi tou count
    localStorage.setItem('count', count);
}

function minus() {
    // vazei sto count tin timi pou idi iparxei sto local storage
    let count = localStorage.getItem('count');
    count -= 1;
    let res = document.querySelector('h1');
    res.innerHTML = count;
    //ananeonei tin timi tou local storage me thn timi tou count
    localStorage.setItem('count', count);
}


document.addEventListener('DOMContentLoaded', function(){
    // allazei to h1 na exei thn timi tou local storage 
    document.querySelector('h1').innerHTML = localStorage.getItem('count');
    document.querySelector('#plus').onclick = plus;
    document.querySelector('#minus').onclick = minus;
});