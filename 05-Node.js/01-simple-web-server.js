/**
 * Node.js  - Ryan Dahl ( 2009 )
 * 
 */
// import http from 'http'
const http = require('http') ;

const  PORT = 8080;

// Asynchronous  Non-blocking Function
const server =  http.createServer(( req , res ) => {
    console.log("Node is started !");
    res.end( 'Hello Node !');
});

server.listen(PORT  )

/**
 * Server is running when we put " node fileName.js " , 
 * but it gives Response when we put " localhost:PORT "
 * and the console.log( response ) also shows in console and 
 * it is working 
 * 
 */