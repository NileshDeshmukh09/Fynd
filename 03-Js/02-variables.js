/* implicitly typed language */
/* interpreted Language */


/* primitive -  boolean , string , number ( int/float ) */
var price = 100;
var name = 'John';


// can lead to bug
var price = 200; // taken as re-assignment

if( true ){
    var isMonsoon = true;  // var variable do not have "block scope"
}

console.log( isMonsoon );

let quantity = 5;
// let quantity = 34; // cannot redeclare Let assign variable.

if( true ){
     let greeting = "Jai Mata Di"; // block - scoped variable
     console.log( greeting );
}

// console.log( greeting ) // error - not availability globallly


const Pi = 3.14;
// pi = 3.15 // error
