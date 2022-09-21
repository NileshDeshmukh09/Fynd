const fs = require('fs/promises');
const path = require('path'); // platform-independant file paths

// console.log(" file Name :", __filename);
// console.log( "DirName : ", __dirname);

const filePath = path.join( __dirname , '..' , 'index.md');

//asynchromous 
fs.readFile( filePath , 'utf-8')
    .then(content => {
        console.log( content );
    })
    .catch( error => {
        console.log( error.message )
    });

console.log(' Last line of Scripts');

