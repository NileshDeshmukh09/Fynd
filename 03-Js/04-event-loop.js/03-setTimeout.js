/**
 *  func will be added to the "event Queue" after 2 seconds
 * 
 *  When the runtime  is "free" , it will pick up functions from the event 
 *  Queue and execute them
 */

setTimeout(
    ()=> {
        console.log( 1 );
    },
    0000 // min delay
)
/**
 *  1 * 10^10
 *  CPU Intensive task
 */
for(let i=0; i < 1e10; i++){
    // console.log(2)
}

console.log( 3 );