const fs = require('fs/promises');
const path = require('path'); // platform-independant file paths

// console.log(" file Name :", __filename);
// console.log( "DirName : ", __dirname);

const filePath = path.join( __dirname , '..' , 'index.md');

//asynchromous 
const readIndexFile = async () => {
    const filePath = path.join( __dirname , '..' , 'index.md');

    try{
        const contents = await fs.readFile( filePath , 'utf-8');
        console.log( contents );
    }catch( error ) {
        console.log( error)
    }
}
readIndexFile();
console.log(' Last line of Scripts');

