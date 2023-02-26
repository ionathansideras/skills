let cont = document.querySelector('body');

const p = document.createElement('p');
p.setAttribute('style', 'color: red;');
p.innerHTML= 'hey im red';
cont.appendChild(p);

const h3 = document.createElement('h3');
h3.setAttribute('style', 'color: blue;');
h3.innerHTML= 'hey im blue h3';
cont.appendChild(h3);

const div = document.createElement('div');
div.setAttribute('style', 'background: pink; border-width: 3px; border-color: black; border-style: solid;');
div.classList.add('container');
cont.appendChild(div);

const h3div = document.createElement('h3');
h3div.innerHTML = 'im in a div';
div.appendChild(h3div);

const pdiv = document.createElement('p');
pdiv.innerHTML = 'me toooooo';
div.appendChild(pdiv);