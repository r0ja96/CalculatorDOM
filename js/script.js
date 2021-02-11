const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const display = document.getElementsByClassName("displayItem");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

number.forEach(n => {
    n.addEventListener('click',() =>{      
        addNumberToDisplay(n.textContent);
    })
});

operator.forEach(o => {
    o.addEventListener('click',() => {
        addOparatorToDisplay(o.textContent);

    })
});

equal.addEventListener( 'click',()=> addEqualToDisplay(equal.textContent));

clear.addEventListener('click', () => clearDisplay());

function addNumberToDisplay(buttonValue){

    
    if(display[1].textContent === '' && display[2].textContent === '' && display[3].textContent === '' && display[4].textContent === ''){ 
        display[0].textContent += buttonValue
    }else if(display[0].textContent !== '' && display[1].textContent !== '' && display[3].textContent === '' && display[4].textContent === ''){
        display[2].textContent += buttonValue;
    };
   

}

function addOparatorToDisplay(buttonValue){

    if(display[0].textContent !== '' && display[2].textContent === '' && display[3].textContent === '' && display[4].textContent === '') display[1].textContent = buttonValue;

}

function addEqualToDisplay(buttonValue){

    if(display[0].textContent !== '' && display[1].textContent !== '' && display[2].textContent !== '' && display[4].textContent === ''){ 
        display[3].textContent = buttonValue
        addResultToDisplay();
    };

}

function addResultToDisplay(){

    var firstNum = parseInt(display[0].textContent);
    var secondNum = parseInt(display[2].textContent);
    console.log(display[1].textContent);
    switch(display[1].textContent){
        case "/":
            display[4].textContent = firstNum/secondNum;
            break;
        case "*":
            display[4].textContent = firstNum*secondNum;
            break;
        case "-":
            display[4].textContent = firstNum-secondNum;
          break;
        case "+":
            display[4].textContent = firstNum+secondNum;
            break;
        default:  
        display[4].textContent= 'Error';
    }
}

function clearDisplay(){
    display[0].textContent = '';
    display[1].textContent = '';
    display[2].textContent = '';
    display[3].textContent = '';
    display[4].textContent = '';
}