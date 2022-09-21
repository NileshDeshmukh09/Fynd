
// import http from 'http'
const http = require('http') ;

const  PORT = 8080;

// Asynchronous  Non-blocking Function
const server =  http.createServer(( req , res ) => {
    console.log("Node is started !");
    res.end( 'Hello Node !');
});




// request ' is an event which fired by the server when an HTTP  request  is received by the server
// we setup the function to be called on this event.
// Hey Server ! , when you receive request please call this method to sent the Response 
server.on( 'request' , ( req , res ) => {
    res.end( 'Hello Node!' );
});


// In case the servre throws an error at startups , let us print hte error
server.on('error' , error=> {
    console.log( error.message );
});

//  start the server
server.on('listening' , ()=> {
    console.log(` Hurray ! , Server up and Running , on http:localhost:${PORT}`);
});
server.listen(PORT  )

/**
 * Server is running when we put " node fileName.js " , 
 * but it gives Response when we put " localhost:PORT "
 * and the console.log( response ) also shows in console and 
 * it is working 
 * 
 */