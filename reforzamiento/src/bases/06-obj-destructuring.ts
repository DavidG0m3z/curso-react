const person = {
    name: 'David',
    age: 29,
    key: 'Ironman'
};


//const name = person.name;
//const age = person.age;
//const key = person.key;


//_--DESTRUCTUIRION

//const { key, name, age } = person;

//console.log({ name, age, key });


interface Hero {
    name: string,
    age: number,
    key: string,
    rank?: string,
}


const useContext = ({ name, age, key, rank }: Hero) => {

    return{
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    }
}

const { 
    keyName, 
    rank, 
        user: { name } 
} = useContext(person);

 


console.log(rank);
console.log(keyName);
console.log(name);