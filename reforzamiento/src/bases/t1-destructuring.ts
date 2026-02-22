// 🧠 Tarea: Implementar useState
// Crea una función llamada useState. Debe cumplir con los siguientes requisitos:

// Requisitos
// La función debe llamarse useState.

// Debe retornar un arreglo con dos elementos:

// #1 - Un string (el valor inicial).

// #2 - Una función anónima de flecha que:

// Recibe un string.
// Imprime ese string en consola.
// Ejemplo de uso esperado
// const [name, setName] = useState('Goku');
// console.log(name);       // Goku
// setName('Vegeta');       // Imprime "Vegeta"

// 🛠️ Tips
// No olvidar usar as const para decir que siempre regresará una estructura predefinida el arreglo.

const useState = (value : string) => {

    return [ 
        value, 
        ( newValue : string) => {
            console.log(newValue);
    } ] as const;
}

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"