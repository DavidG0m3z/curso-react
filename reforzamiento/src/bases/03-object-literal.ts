interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: address;
}

interface address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'David',
    lastName: 'Gomez',
    age: 29,
    address: {
        postalCode: 'ABC123',
        city: 'Medellin',
    }
};


const spiderman: Person = {
    firstName: "Daniel",
    lastName: "Ardila",
    age: 31
}
console.log(ironman, spiderman);

//const spiderman = {...ironman};

//const spiderman = structuredClone(ironman);


//spiderman.firstName = 'Daniel';
//spiderman.lastName = 'Ardila';
//spiderman.age = 31;
//spiderman.addres.city = 'Bogota';


//console.log(ironman, spiderman);