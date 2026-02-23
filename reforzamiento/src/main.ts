import './style.css'
//import './bases/01-const-let'
//import './bases/03-object-literal'
//import './bases/04-arrays'
//import './bases/05-funciones'
//import './bases/06-obj-destructuring'
// import './bases/07-array-desctructuring'
//import './bases/t1-destructuring'
//import './bases/08-import-export'
import './bases/09.promises'



import { getHeroByOwner } from './bases/08-import-export'
import { Owner } from './data/hero.data';







document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Mundo</h1>
  </div>
`

console.log(getHeroByOwner(Owner.DC));

