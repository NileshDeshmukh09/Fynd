class Movie {

    constructor( name, cast , yearOfRelease , boxOfficeCollection){
        this.name = name,
        this.cast = cast,
        this.yearOfRelease = yearOfRelease,
        this.boxOfficeCollection = boxOfficeCollection
    }

    addToCast( addMember ){
        this.cast.push(addMember);
    }

    addToCollection(addCollection){
        this.boxOfficeCollection += addCollection;
    }

};

class SequelMovie extends Movie{

    constructor(name,cast,yearOfRelease,boxOfficeCollection, earlierMovies){
        super(name, cast , yearOfRelease , boxOfficeCollection);
        this.earlierMovies = earlierMovies;
    }
    getLifetimeEarnings(){
        let collection2=0;
        for(let i=0; i<this.movieCollection.length; i++)
        {
          collection2+= this.movieCollection[i].collection;
        }
        return collection2;
    }
};
const firstMovie = new Movie('Bhool-bhulaiya-2', ['kartik Aryan'], 2022 , 2300);
firstMovie.addToCast("Paresh rawal");
console.log( firstMovie );




