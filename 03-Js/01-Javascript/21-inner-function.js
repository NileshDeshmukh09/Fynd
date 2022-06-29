/**
 *  ** foo1 and foo are created before this script starts eexution
 * 
 *   ** bar within foo1 is created only when foo starts executing
 * 
 *   ** bar os destroyed when foo finishes executing
 *   ** Moral of the Function :: Inner functions are "Local" to the function
 */
function foo(){
    function bar(){
        console.log("bar inside foo")
    }
    bar();
}

function foo1(){
    function bar(){
        console.log("bar inside foo1...")

    }
    bar();
}

foo();
foo1(); // creates a local "bar" function temperorily