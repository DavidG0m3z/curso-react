
const myPromise = new Promise<number>( (resolve, reject) => {

  setTimeout(() => {
    
    resolve(100);
    reject('Mi amigo se perdio con mi dinero');

  }, 2000);   // 2 seg

} );


myPromise
  .then( (myMoney)=> console.log(`tengo mi ${myMoney} de regreso`) )
  .catch( (reason) => {console.warn(reason)} )
  .finally( () => console.log('Seguire con mi vida') );