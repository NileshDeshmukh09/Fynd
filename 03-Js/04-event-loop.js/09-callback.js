function sum(x,y, callback ){
   setTimeout( //  Nodejs call this function
    ()=>{
       callback( x+y );
    },3000
   );

   //return undefined 
}

/**
 * SetTimeout will take 3 second to  , 
 * so the console.log will return undefined 
 */
console.log(sum(1  ,2 , ( result )=> {
    console.log("result :", result);
}));

console.log(1);