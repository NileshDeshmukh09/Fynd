/**
 * When a function completes without explicitly returning , it
 *  return undefined !
 */

function foo(){
    console.log("foo is called");
}

const result = foo();

function xoo( x ,y ){
    console.log("x : ", x);
    console.log("y : ", x);
    console.log("z : ", x);
    /**
     * Arguments : used to accessed all the         
     *             arguments of Function
     * 
     *  { 0: 12 , 1:13 , 2 : 14, 3:15 , length = 4}
     */

    console.log(arguments); // "Array - like - objects"
    console.log(arguments.length); // the number of arguments

    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
}

xoo( 12 ,143) // z = undefinded

xoo( 12 ,13 , 14 ,15);