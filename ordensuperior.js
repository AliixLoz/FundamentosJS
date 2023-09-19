// Funciones de Orden Superior
// High Order Function
// Funciones que reciben otras funciones como parámetros

const myFuctionWhiteBigName = () => {
    console.log ('Esta es una Función')
}

myFuctionWhiteBigName();

const myFun = myFuctionWhiteBigName;

myFun();

const funOne = () => {
    console.log('Ejecuta función 1')
}

const funTwo = (name) => {
    console.log('Holi' + name)
    console.log('Ejecuta función 2')
}

funOne();
funTwo('Aliix');

const funThree = (otherFunction) => {
    otherFunction();
    console.log('Ejecuta función 3')
}

funThree(funOne);


