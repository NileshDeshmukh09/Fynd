// function printPerson( person ){
//     const { name  , age } = person; // Destructuring syntax
//     console.log( `${name} is ${age} years old`)
// }
// printPerson({
//     name: "John",
//     gender : 'Male',
//     age : 32,

// })

/**
 * filter  [ 1 , 4, 7, 2, 9, 11, 41, 34]
 */


let arr =  [ 1 , 4, 7, 2, 9, 11, 41, 34];
const odd = x => x%2===1;
function checkOdd( arr , func ){

    for(let i = 0 ; i < arr.length; i++ ){

        if(func(arr[i]) )
            console.log("true", i);
        else{
            console.log("false");
        }
    }
}

console.log(checkOdd(arr , odd));