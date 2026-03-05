import type { CSSProperties } from "react";


const firstName = 'David';
const lastName = 'Gomez';

const favoriteSports = ['Boxeo', 'Running', 'Natacion'];

const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Canada'
}

// const myStile : CSS = {
//     Back
// }

const mystyle : CSSProperties = {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginTop: 50



}

export function MyAwesomeApp() {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteSports}</p>
            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>
            
            <p style={mystyle}>{JSON.stringify(address)}</p>
        </>
    )
}