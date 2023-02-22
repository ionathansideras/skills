function turn() {
    let greeding = document.querySelector('h1');
    if(greeding.innerHTML == 'hello'){
        greeding.innerHTML = 'bye';
    }

    else{
        greeding.innerHTML = 'hello';
    }
}