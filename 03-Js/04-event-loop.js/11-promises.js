/**
 * Alternative  to callback Pattern
 * 
 * ES-2015 class ( Promise );
 */

function sum( x ,y ){
    return new Promise((resolve , reject)=> {
        setTimeout(
            ()=> {
                if( typeof x !== 'number' || typeof y !== 'number'){
                    reject( new Error( "both arguments must be a number"));
                    return;
                }
                /**
                 * We convey the result to the Promise object by calling resolve and 
                 * passing it tje result
                 */
                resolve( x+y);
            }
        )
    })
}

// Promise object has 2 Methods = then() , catch()

// Hey Promise object! whenever you get the result please call this function

// Promise is returned immediately - then() , catch() are called immediately

sum( 12 ,13 )
    .then(( result1 )=> {
        console.log('res1 : ', result1);

        return sum( result1 , 'hello');

    })
    .then(( result2 )=> {
        console.log('res2 : ', result2);
        return sum(result2 , 14);
    
    })
    .then(( result3 )=> {
        console.log('res3 : ', result3);
        return sum(result3 , 14);
    
    })
    .catch(( error )=>{
        console.log(error.message )
    });