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
    });
});

// this function shows the results
function getResoults(){
    let num1 = '0';
    let num2 = '0';
    let operator = '+'; 
    let results;
    
    for(let i = 0; i < display.length; i++){
        // when the display == with an operator
        if(display[i] == '+' || display[i] == '-' || display[i] == '/' || display[i] == '*'){  
            //we execute the operate function and store our results 
            results = operate(Number(num2),operator,Number(num1));
            // operator = new oprator
            operator = display[i];
            //num2 gets the value of the results 
            num2 = results;
            // and we reset the num1
            num1 ='';   
        }                
        else{
            // if display[i] is digit the num1 veriable gets updated
            num1 += display[i];
        }       
    };
    results = operate(Number(num2),operator,Number(num1));
    
    // checks if results has a decimal point
    if(results % 1 != 0){
        let desti = results.toString().split('.')[1];
        //if it has more than 3
        if(desti.length>3){
            // we force it to have max 4 digits 
            results = results.toFixed(4);
            document.querySelector('h1').innerHTML = results;
        }
        else{
            //else leave it as it is
            document.querySelector('h1').innerHTML = results;
        }
    }
    else{
        document.querySelector('h1').innerHTML = results;
    }

    display=[results];
};

// when the results button is clicked
document.querySelector('.results').addEventListener('click', function(){
    getResoults();
});

//on click clear
document.querySelector('.clear').addEventListener('click', function(){
    // the display array gets empty
    display = [];
    //showing 0 again
    document.querySelector('h1').innerHTML = '0';
});

