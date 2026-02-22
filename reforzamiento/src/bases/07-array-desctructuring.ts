const characterName = [ 'Goku', 'Vegeta', 'hogan'];


const [, ,p3] = characterName;

console.log(p3);    

const returnArray = () => {
    return ['ABC', 123] as const;
}

const [ letters, numbers ] = returnArray();

console.log(letters, numbers);