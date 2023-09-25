// Funciones en JavaScript
//Función sin parámetros y sin retorno
function saluda(){
    console.log('Holiiiiiiiiiii');
}
saluda();

//Función con parámetros y sin retorno
function addOne(num){
    console.log(`el ${ num } + 1 = ${ num + 1}`);

}
addOne(15);

//Función sin parámetros y con retorno
function suma(num1, num2){
    return num1 + num2;
}
const result = suma(12, 34)
console.log(result);

// Funciones como constantes 
// Funciones anonimas
const resta = function (num1, num2){
    return num1 - num2;
}
const resultado = resta(12,2);
console.log(resultado);

// Funciones de felcha Arrow Functions
(param1, param2) => {
    //code
    //return
}

const duplica = (num) => {
    return num * 2;
}

const multiplica = (num1, num2) => {
    console.log('Multiplica números');
    return num1 * num2;
}

const doble = duplica(16);
console.log(doble);

const resultM = multiplica(13, 26);
console.log(resultM);

//Simplificando Arrow Functions
let cambiaMinusculas = (word) => {
    return word.toLowerCase();
}

//  Si solo es un único parámetro se pueden omitir parentesis 
// Si la unica línea es el return se puede omitir llaves
cambiaMinusculas = word => word.toLowerCase();




