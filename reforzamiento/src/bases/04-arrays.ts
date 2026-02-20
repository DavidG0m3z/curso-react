const myArray: number[] = [1,2,3,4,5];//! simepre poner el tipo de dato
const myArray2: (number|string)[] = [1,2,3,4,5,'6']; //! Esto esta mal debemos en lo posible crear el array de un solo typo

// myArray.push('10');
myArray.push(11);

console.log({myArray, myArray2});