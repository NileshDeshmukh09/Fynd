const John = {
    'name': 'John',
    age :32,
    emails: [
        'john@fynd.email',
        'fake@fynd.email',
    ], 
    children : [
        'jack',
        'Jill',
    ],
    address : {
        city: "Nagpur",
        area: "Burdi",
        pinCode: "340045",
    }
}
/*
const name = john.name
const age = john.age
const firstEmail = john.emails[0]
const sonu = john.children[0]
const area = john.address.area
*/

const {
    age ,
    name,
    address:{
        city,
        area
    }, 
    emails:[
        firstEmail
    ]
} = John

// console.log( name , age , city , age , firstEmail );