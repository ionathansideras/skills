let myLibrary = [];

function Book() {
    // the constructor...
    
}

function addBookToLibrary(title, author, pages, read) {
    // do stuff here
    this.title = title;
    this.author = author;
    this.pager = pages;
    this.read = read;
}

function loop(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
};

// elenxoume to form otan kanei submit
document.querySelector('form').onsubmit = () => {
    // pernoume ta inputs values 
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
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

    let main = document.querySelector('main');
    let article = document.createElement('article');
    

    const divTitle = document.createElement('div');
    divTitle.innerHTML = title;
    article.appendChild(divTitle);

    const divAuthor = document.createElement('div');
    divAuthor.innerHTML = author;
    article.appendChild(divAuthor);

    const divPages = document.createElement('div');
    divPages.innerHTML = pages;
    article.appendChild(divPages);

    const divCheck = document.createElement('div');
    divCheck.innerHTML = check;
    article.appendChild(divCheck);

    const deleteBut = document.createElement('button');
    deleteBut.innerHTML = 'Remove';
    article.appendChild(deleteBut);

    main.appendChild(article);

    //stop submiting
    return false;
}
