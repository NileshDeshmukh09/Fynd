
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

/**
 * an async function can be paused and resumed 
 */
const doSerialSums = async ()=>{
    /**
     * Await is put , before the Promise
     * 
     *  ** Pause the function till the promise is fulffilled ( resolves / reject )
     *  ** the function gives up control , and rest of code can excecute
     */
    await sum( 12, 13);
    console.log( 2 );
}
/**
 * Async function always returns PROMISE
 */
doSerialSums();
console.log(3)