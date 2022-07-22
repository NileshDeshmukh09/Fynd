/**
 * Your code to read from one files and copy to another file 
 * IMP : Use streams ( you do not need to specify the 
 * encoding anywhere since you can rerad raw bytes and write raw 
 * bytes )
 */

const fs = require('fs');
const path = require('path');

const src = path.join( __dirname , 'meetings-app.pdf');

const rs = fs.createReadStream( src );
const ws = fs.createReadStream( dest );