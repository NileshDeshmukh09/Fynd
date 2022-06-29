const  john = {
    naam : 'john',
    age : 32,
    emails : [
        'fake-email@fynd.com',
        'fake1-email@fynd.com'
    ],

    children :[
        'john',
        'Jill'
    ],

    address : {
        city :"Nagpur",
        area : "Burdi",
        pinCode : 440034
    },

    celebrateBirthday(){
        this.age++;
    },

    addchild(child){
        this.children.push(child);
    },

    changeAddress(city , area, pinCode ){
        this.children.city = city;
        this.children.area = area;
        this.children.pinCode = pinCode;
    },

    getNumChildren(){
        return this.children.length;
    }
}

john.celebrateBirthday();
john.addchild(' Jamie ');
john.changeAddress('Hyderabad' , "Hi-tech" , 440012);
john.getNumChildren();
/** ----------- */

john.addEmail = function( email ){
    this.emails.push( email );
}

john.addEmail( "newemail@fynd.com" );
console.log( john);
console.log( john.getNumChildren());
console.log( john.emails);


const Bhool_Bhulaiya = {
    Actor : [
        'Kartik Aryan',
        'Kiara Advani',
        'Paresh Rawal'
    ],
    BoxOffice_Collection : 230000000,
    addCast( actorName ){
        this.Actor.push(actorName);
    },
    updated_BoxOffice_collection( amount ){
          return this.BoxOffice_Collection += amount;
    }
}

Bhool_Bhulaiya.addCast("Rajpal Yadav");
Bhool_Bhulaiya.updated_BoxOffice_collection(10000000)

console.log(Bhool_Bhulaiya);
console.log(Bhool_Bhulaiya.BoxOffice_Collection);
