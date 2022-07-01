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

 /**
  *   Christmas Tree / callback hell --- Code reability
  *   is not easy as , it goes function deeper and deeper
  */
 sum(1  ,2 , ( result1 )=> {
    sum( result1 , 14 , (result2)=>{
        sum( result2 , 15 , (result3)=>{
            console.log("Res :", result3)
        })
    })
    
 });
 
//  console.log(1);