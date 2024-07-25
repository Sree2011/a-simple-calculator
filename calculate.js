
// calculator program

//get the display element
const display = document.getElementById("display");


//Append to display

function appendToDisplay(input){
    display.value+=input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){ 
    
    try{
    display.value = eval(display.value);
    }
    catch{
        display.value="Error";
    }
}