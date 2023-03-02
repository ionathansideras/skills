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

// when the results button is clicked
document.querySelector('.results').addEventListener('click', function(){
    
    let num1 = '';
    let num2= '';
    let operator = ''; 
    let results;
    
    for(let i = 0; i < display.length; i++){
        
        if(display[i] == '+' || display[i] == '-' || display[i] == '/' || display[i] == '*'){
            operator = display[i];
            results = operate(~~num1,operator,~~num2)
            num2 = results;
            num1 ='';                
            operator = '';
            
        }                
        else{
            num1 += display[i];
        }       
        console.log(results);
    };

});
//on click clear
document.querySelector('.clear').addEventListener('click', function(){
    // the display array gets empty
    display = [];
    //showing 0 again
    document.querySelector('h1').innerHTML = '0';
});

