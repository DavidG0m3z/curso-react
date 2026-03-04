
const firstName = 'David';
const lastName = 'Gomez';

const favoriteSports = ['Boxeo', 'Running', 'Natacion'];

const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Canada'
}


export function MyAwesomeApp() {


    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteSports}</p>
            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>
            <p>{JSON.stringify(address)}</p>
        </>
    )
}