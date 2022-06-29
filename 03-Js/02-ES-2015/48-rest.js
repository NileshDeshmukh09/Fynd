// rest (...) / spread (...)

/**
 *  1. to gather remaining arguments in a function parameter list
 *  2. a replacement fo using agruments objects
 */

function sum(transform , ...args){
    console.log( args );
}

let result;

result = sum(x => x*x , 1,2)
console.log(result);

const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const [mon , tue , ...restOfDays] = weekdays ;
console.log( restOfDays );

/** Object Desturcturing */

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

const {
    name,
    address : {
        city
    },
    ...restOfDetails
} = John;

console.log( restOfDetails ) 