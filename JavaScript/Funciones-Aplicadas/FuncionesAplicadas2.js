function displayNumbers(){
    for(let i=3; i<=9; i++){
        console.log(i);
    }
}
displayNumbers();

//--------------------------------------------
function displayAlert(message){
    for ( let i=0; i<5; i++){
             
        console.log(message);
    }
}

displayAlert("I will practice Javascript");
//--------------------------------------------------

function countGingerBeers(message){
    for(let i=10; i>0; i--){
        console.log(i+ message)
    }
}
countGingerBeers(" bottles of ginger beer on the wall  ");
//----------------------------------------------------------
function summonBeetlejuice(times){
    for(let i=0;i<times; i++){
        console.log("Beetlejuice");
    }       
}
summonBeetlejuice(3);

//-----------------------------------------------------
function displayCountdown(start){
    for(let i=start; i>0; i--){
        console.log(i);
    }
    console.log("Launch!");

}
displayCountdown(3);

//---------------------------------------------------------------
function displayAltitude(start, end){
    for(let i=start; i<=end; i++){
        console.log(i + "ft");
    }
}

displayAltitude(1299, 1305);
//---------------------------------------------------------

const numbers = [2, 4, 6, 8];

function printNumbers(numbers){
    for(let i=0; i<numbers.length; i++){
        console.log(numbers[i]);
    }
}

printNumbers(numbers);

//--------------------------------------------------
function sayHello(word){
    return word;
}
sayHello("Hello");
//-------------------------------------------------

function printNumbers_1(numbers){
    for(let i=0; i<numbers.length; i++){
        console.log(numbers[i]);
    };
}
printNumbers_1([1, 2, 3]);
//----------------------------------------------------
const firstNumber = 10;
const secondNumber = 5;

function add(num1, num2){
    return num1 + num2;
}
const result = add(firstNumber,secondNumber);
//-----------------------------------------------------

const names = ['John', 'Adam', 'Sarah'];

function printEachName(names){
    for(let i=0;i<names.length; i++){
        console.log(names[i]);
    }
}
printEachName(names);

//---------------------------------------------------------

const languages = ["JavaScript", "C++","Python"];

function findLanguages(languages, language){
    for(let i=0;i<languages.length;i++){
        if(languages[i] === language){
            console.log(language + " found!");
        break;
        }else{
            console.log(language + "does not exist");
        }
    }
}

findLanguages(languages,"JavaScript");
//-----------------------------------------------------------
const prices = [100, 150, 200];
const discounts =[0.1, 0.2, 0.25];

function gatValues(prices,discounts){
    let values =[];
    for(let i=0; i<prices.length; i++){
         values[i] = prices[i] * discounts[i];

    }
    console.log(values);
}

gatValues(prices,discounts);

//------------------------------------------------------------------
const numbers_3 = [1, 2, 3, 4, 5];

function double(numbers_3){
    for( let i=0; i<numbers_3.length; i++){
        console.log(numbers_3[i]*2);
    }
}
double(numbers_3);
