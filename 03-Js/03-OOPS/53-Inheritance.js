class Person {
    nationality = 'Indian';
    relationshipStatus = "single"

    constructor( name , age ){
        // console.log( this ); // Newly created object object
        this.name = name,
        this.age = age
    }

    celebrateBirthday(){
        this.age++;
    }  
}

class Employee extends Person {
    /**
     * If No constructor is provided,
     * Default Constructor will call Person constructor and 
     * pass it whatever it receive
    */

    constructor( name , age , role , dept ){
        super( name , age );
        this.role = role;
        this. dept = dept;

    }
    celebrateBirthday(){
        console.log(`Happy Birthday ${this.name}`)
        super.celebrateBirthday()
    }
}

const  John = new Employee( 'John' , 32 , "SDE", "Google Cloud");
John.celebrateBirthday();
console.log( John )

