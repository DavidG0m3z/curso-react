import { heroes, type Owner, type Hero} from "../data/hero.data"

const getHeroById = (id: number): Hero|undefined => {
    
    const hero = heroes.find( (hero) => {
        return hero.id === id;

        // if(!hero){
        //     throw new Error(`No existe un hero con el id: ${id}`);
        // }
    } );
    return hero;
};


console.log(getHeroById(1));

// getHeroByOwner => Heo[]
// filtrar heroe por su propietario
// |param Ouner - el propietario por el cual filtrar dv o Marlvel 
// @returns array de heros pertenecientes al propietario

export const getHeroByOwner = (owner: Owner) => {

    const herosByOwner = heroes.filter( (hero) => {
        hero.owner === owner;
        
    } )

    return herosByOwner
}


export const getHeroByOwner2 = ( owner: Owner ) => 
    heroes.filter( (hero) => hero.owner === owner );


