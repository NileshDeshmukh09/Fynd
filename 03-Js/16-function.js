// 3 syntax of functions

//Function Declaration (old)  - these kind of function are created before the script eexution phase

function sum1( x, y){
    let result = x+y;
    return result;
}

const result = sum1( 12 ,13);
console.log(result);

//Function Expression (old) - created JUST-IN-TIME (JIT)
const sum2 = function(x ,y ){ 
    
}

//Function Expression (ES-2015)
const sum3 = (x,y) => {
    return x+y;
}
console.log( sum3(2,3));


/**
 * Programming Paradiagm is used to tell about how to
 * write a Programm.
 *  
 *   1. Functional  paradiagm
 *   2. Procedural Programming ( functions ).
 *   3. Object oriented Programming ( Objects ).
 */


