 // vazei style sto div
 let yolo = document.querySelector("#container");
 yolo.setAttribute('style', 'color: black; background: pink; font-size: 40px;');
 
 // dimiourgei ena kimeno 
 let child = document.createElement('p');
 // tou vazei ena class
 child.classList.add('content');
 // tou vazei ena kimeno mesa
 child.innerHTML = 'child';
 // to kanei append mesa sto allo div 
 yolo.appendChild(child);