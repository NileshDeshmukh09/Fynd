// Do not deal with "var" variables

let x= 1;

function outer(){
    let x =2;
    let y = 1;// scope to outer function
    console.log("[outer]x = ", x); // ( local x )
    console.log("[outer] y = ", y);

    function inner(){
        let x = 3; // scope to inner function
        let z = 2; // scope to inner function
        console.log("[inner] x = ", x); // 3 (inner x )
        console.log("[inner] y = ", x); // 1 (outer y )

    }

    inner();
    console.log("[inner] y = ", x); // Error  - any function can use outer function variable

}
console.log("[global]x = ", x);
outer();

// console.log("[global]y = ", y); // y is  not defined