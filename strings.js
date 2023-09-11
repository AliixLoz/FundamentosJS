// Strings
const firstName = 'Aliix';
const lastName = "Vera";
const fullName = firstName + "" + lastName;

console.log("I´m" + firstName);

//String Multilinea
const menu = `
elige
1 - Opción 1
2 - Opción 2
3 - Opción 3
`;

console.log(menu);

//String Templates
//placeholder ${}

const city = 'Apizaco';
const phone = '2412399510'
const rol = 'Alumno';

const presentation = `
Holiiii
Soy ${ fullName }, ${rol} en la UTT
Vivo en ${city}
Te puedes comunicar conmigo al num ${phone}
`;

console.log(presentation);

