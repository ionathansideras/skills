let buttons = document.querySelectorAll('#num');
let display = [];

function add(x,y){
    return x+y;
};
function subtract(x,y){
    return x-y;
};
function multiply(x,y){
    return x*y;
};
function divide(x,y){
    return x/y;
};

function operate(num1,operator,num2){
    if(operator == '+'){
        return add(num1,num2);
    }
    else if(operator == '-'){
        return subtract(num1,num2);
    }
    else if(operator == '*'){
        return multiply(num1,num2);
    }
    else if(operator == '/'){
        return divide(num1,num2);
    }
};

//for each button in the node list
buttons.forEach(function(button){
    //add on click 
    button.addEventListener('click', function(){
        // we add the value of the button in to the display array
        display.push(button.value);
        //showing the array
        document.querySelector('h1').innerHTML = display.join('');
        if(display.length >= 12){
            display.pop();
            document.querySelector('h1').innerHTML = display.join('');
        }
    });
});

// this function shows the results
function getResoults(){
    let num1 = '0';
    let num2 = '0';
    let operator = '+'; 
    let results = [];
    let flag = false;
    for(let i = 0; i < display.length; i++){
        
        // when the display == with an operator
        if((display[i] == '+' || display[i] == '-' || display[i] == '/' || display[i] == '*') && flag == false){  
            //we execute the operate function and store our results 
            results = operate(Number(num2),operator,Number(num1));
            // operator = new oprator
            operator = display[i];
            //num2 gets the value of the results 
            num2 = results;
            // and we reset the num1
            num1 ='';   
            flag = true;
        }                
        else{
            // if display[i] is digit the num1 veriable gets updated
            num1 += display[i];
            flag = false;
        }       
    };
    results = operate(Number(num2),operator,Number(num1));
    display=[results];

    let newD = '';

    if(display == 'NaN' || display == 'Infinity'){
        display = ['OOPS!'];
    }
    // if length is > 12
    if(display.toString().length > 12){
        // we pass the values to this new str
        newD = display.join('');
        display = [];
        // loop 12 times
        for(let i = 0; i < 12; i++){
            //we add only the first 11 characters 
            if(i > 11){
                break;
            }
            display.push(newD[i]);
        }
        
        document.querySelector('h1').innerHTML = display.join('');
    }
    else{
        document.querySelector('h1').innerHTML = display;
    }
    
};

// when the results button is clicked
document.querySelector('.results').addEventListener('click', function(){
    getResoults();
});

//if back is clicked it deletes the last element
document.querySelector('.back').addEventListener('click', function(){
    display.pop();
    document.querySelector('h1').innerHTML = display.join('');
    if(display.length == 0){
        document.querySelector('h1').innerHTML = '0';
    }
});

//on click clear
document.querySelector('.clear').addEventListener('click', function(){
    // the display array gets empty
    display = [];
    //showing 0 again
    document.querySelector('h1').innerHTML = '0';
});

