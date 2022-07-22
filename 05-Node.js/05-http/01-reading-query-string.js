const http = require( 'http' );
const url = require( 'url' );

const server = http.createServer(( req, res ) => {
    // console.log( req.url );

    console.log( url.parse( req.url, true ) );

    const {
         pathname, query : { x, y } 
    } = url.parse( req.url, true );

    console.log( pathname, x, y );

    if( pathname == '/add' ) {
        const sum =parseInt(x) + parseInt(y) ;
        res.end( `${typeof x} and ${typeof y}  sum is   ${sum} `);
    } else  if( pathname == '/divide' ) {
        const divide =parseInt(x)/parseInt(y) ;
        res.end( `${typeof x} and ${typeof y}  sum is   ${divide} `);
    }else  if( pathname == '/mutiply' ) {
        const divide =parseInt(x)/parseInt(y) ;
        res.end( `${typeof x} and ${typeof y}  sum is   ${divide} `);
    } 
 
});

server.listen( 8080 );