function greet( name: string ): string {
    return `Hello ${name}`;
}


const greet2 = (name: string) => `Hello ${name}`;


interface User {
    uid: string,
    username: string,
}



function getUser(): User {
    
    return {
        uid: 'ABC-123',
        username: 'DavidDev'
    }
}

const getuser2 = () => ({
        uid: 'DEF-456',
        username: 'DaniDev'
    });


const message = greet('David');
const message2 = greet2('Dabuek')

const user = getUser();
console.log(user);

const user2 = getuser2
console.log(user2);
