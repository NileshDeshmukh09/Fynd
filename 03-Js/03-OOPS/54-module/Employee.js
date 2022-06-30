import{ Person } from './Person'

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

export {
    Employee
}
