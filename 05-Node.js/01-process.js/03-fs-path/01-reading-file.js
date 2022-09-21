const fs = require('fs');
const path = require('path'); // platform-independant file paths

console.log(" file Name :", __filename);
console.log( "DirName : ", __dirname);

// the callback function is called when the file  has been read !
const filePath = path.join( __dirname  , '..' , 'index.md');
// const filePath = path.join( __dirname  , 'utf-8' , 'index.md');


try{

    const contents = fs.readFileSync( filePath , 'utf-8' );
    
        /**
         * If we  do not pass encoding we get
         */
        // console.log( contents );
        console.log( filePath );
        console.log( contents );
}
catch( error ){
    console.log(error.message);
}

console.log(' Last line of Scripts');

