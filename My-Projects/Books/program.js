let myLibrary = [];

function Book() {
    // the constructor...
    
}

function addBookToLibrary(title, author, pages, read) {
    // do stuff here
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function loop(array){
    for(let i = 0; i < array.length; i++){
        const obj = array[i];

        let main = document.querySelector('main');
        let artical = document.createElement('article');

        for(let j in obj){
            let addIt = document.createElement('div');
            addIt.innerHTML = obj[j];
            artical.appendChild(addIt);
            main.appendChild(artical);
        }

        let button = document.createElement('button');
        button.innerHTML = 'Remove';
        button.setAttribute('value',i);
        button.setAttribute('class', 'but');
        artical.appendChild(button);
    }
};

function clear(){
    const articles = document.querySelectorAll('article');
    for (let i = 0; i < articles.length; i++) {
        articles[i].remove();
    }
};


// elenxoume to form otan kanei submit
document.querySelector('form').onsubmit = () => {
    // pernoume ta inputs values 
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value+' Pages';
    const read = document.querySelector('#read');
    let check = '';
    if (read.checked) {
        check = 'Read';
    } else {
        check = 'Not read';
    }
    
    myLibrary.push(new addBookToLibrary(title, author, pages, check));

    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = false;

    clear();
    loop(myLibrary);

    remove();

    //stop submiting
    return false;
}
//kanei remove to object pou theloume
function remove(){
    let remove = document.querySelectorAll('.but');
    remove.forEach(function(button){
        button.addEventListener('click', function(){
            myLibrary.splice(button.value, 1);
            clear();
            loop(myLibrary);
        })
    })
}





