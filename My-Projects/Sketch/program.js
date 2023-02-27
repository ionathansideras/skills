let userInput = 16;
let userColor = document.querySelector('#color').value;
let container = document.querySelector('.container');
let clickFlag = false;
document.querySelector('.backColor').style.backgroundColor = 'gray';

// pernei size gia pon pinaka
function getSize(){
    //prosarmozei to container analoga me to input tou xristi
    container.setAttribute('style', `display: inline-grid; box-shadow: 0px 0px 5px 1px rgb(173, 173, 173); grid-template-columns: repeat(${userInput}, 1fr); width: 450px; height: 450px; grid-template-rows: repeat(${userInput}, 1fr);`);
    //dimiourgei ta divs
    for(let i = 0; i < (userInput*userInput); i++){
        const pixels = document.createElement('div');
        pixels.setAttribute('style', 'display: grid;');
        //ta prosthetei sto container ws childs
        container.appendChild(pixels);
    };
};
getSize();

// otan allazei tin to size to xristis to container prosarmozete
document.querySelector('#userInput').onchange = function(){
    //to userinput isoute me to value tou xristi
    userInput = document.querySelector('#userInput').value;
    //apla dixnei sto xristi ti size epelekse
    let view = document.querySelector('p');
    view.innerHTML = userInput+'x'+userInput;
    //kalei to size function gia na prosarmostei sto kenourio size
    getSize();
    //kaloume to colorit gia na prosarmosei to div node list stis kainouries diastaseis
    colorIt();
};

//perimenei gia xroma apo ton xristi
document.querySelector('#color').onchange = function(){
    userColor = document.querySelector('#color').value;
    // otan allaksei to xroma kalei to size funtion gia na prosarmosei to kainourio xroma
    getSize();
};

//otan to pontiki einai panw apo to container kai einai patimeno
container.addEventListener('mousedown', function(){
    // to flag ginete true
    clickFlag = true;
});

//otan to pontiki einai panw apo to container kai den einai patimeno
container.addEventListener('mouseup', function(){
    // to flag paramenei false
    clickFlag = false;
});

// afou fortosoun ola to divs tha exei node lista apo ola ta div mesa 
function colorIt(){
        let divs = document.querySelectorAll('div');
        //gia kathe div vazoume ena event listener
        divs.forEach(function(div){
            div.addEventListener('mouseover', () =>{
                //otan to flag einai trou tote mporoume na zografisoume
                if(clickFlag === true){
                //alazoume to xroma apo to div
                div.style.backgroundColor = userColor;
                };
            });
            div.addEventListener('click', () =>{
                //alazoume to xroma apo to div on click
                div.style.backgroundColor = userColor;
            });
            //otan to ksana treksoyme to xroma tha ginei aspro
            div.style.backgroundColor = 'white';      
        });
};
colorIt();

// otan kanoume klik to button
document.querySelector('.clear').addEventListener('click', function(){
    //ksana kalei to colorit opote diagrafonte ta xromatismena pixel
    colorIt();
});

// otan click to xroma ginete aspro gia svistra
document.querySelector('.eraser').addEventListener('click', function(){
    userColor = 'white';
    document.querySelector('.backColor').style.backgroundColor = 'rgb(59, 163, 255)';
    document.querySelector('.eraser').style.backgroundColor = 'gray';
    
});

//otan click to xroma erxete pali se ayto pou htan
document.querySelector('.backColor').addEventListener('click', function(){
    document.querySelector('.backColor').style.backgroundColor = 'gray';
    document.querySelector('.eraser').style.backgroundColor = 'rgb(59, 163, 255)';
    userColor = document.querySelector('#color').value;
});







