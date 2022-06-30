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

export {
    Person, 
}