function addOneHundred(number){
    return number + 100;
}
const result1 = addOneHundred(29);
console.log(result1);

// -------------------------------------------
function multiplyByTen(number){
    return number * 10;
    return number + 100;
}
const result2 = addOneHundred(29);
console.log(result2);
//------------------------------------------------
function isKilometer(meters){
    if (meters === 1000){
        return "Exacty a kilometer";
    }else{
        return "Not a kilometer";
    }
}

const result3 = isKilometer(1000);
console.log(result3);
//---------------------------------------------------------

function isFair(boolean){
    if(boolean === true){
        return "That's fair";
    }else{
        return "That's not fair";
    }
}
const result4 = isFair(false);
console.log(result4);

//--------------------------------------------------------------

function isTemperate(degrees){
    if(degrees<32){
        return "Too cold";
    }else if(degrees > 85){
        return "Too hot";
    }
    if( 32<degrees<85){
        return "is great";
    }
}
const result5 = isTemperate(75);
console.log(result5);
//-------------------------------------------------