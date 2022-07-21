const fs = require('fs/promises');
const path = require('path'); // platform-independant file paths

const filePath = path.join(__dirname , 'hello.txt' );

const contents = `Hello World , what's up !`;
/**
 * How do we append to existing content instead of overwriting the content of the file ?
 */
const writeHelloFile = async () => {
    try{
        console.log("file is going to read !");
        await fs.writeFile(filePath  , contents , 'utf-8');
        console.log( ` Done Writing -- Check Hello.txt`);
    }catch( error ){
        console.log( error.message )
    }
}

writeHelloFile();