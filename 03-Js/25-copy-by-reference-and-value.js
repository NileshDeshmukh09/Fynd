let x = 1;
let y = x;

y++;

console.log( 'x = ', x); // 1
console.log( 'y = ', y);// 2

const a = [ 1,2,3,4];
const b = a; // Reference variable ( pointers in c++ ), b and a Refers to same array in Memory.
b.push(5);

console.log( 'a = ', a); // [1,2,3,4,5] , a is also change 
console.log( 'b = ', b);// [ 1,2,3,4,5]

let john = {
    name : "JOHN",
    age : 32
}

let johnSena = john // JohnSena and John refers to same object in Memory

