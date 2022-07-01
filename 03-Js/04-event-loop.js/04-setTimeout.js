
setTimeout(
    ()=> {
        console.log( 1 );
    },
    3000 // min delay
)
/**
 *  1 * 10^10
 *  CPU Intensive task
 */
for(let i=0; i < 1e10; i++){
    // console.log(2)
}


setTimeout(
    ()=> {
        console.log( 2 );
    },
    0000 // min delay
)

