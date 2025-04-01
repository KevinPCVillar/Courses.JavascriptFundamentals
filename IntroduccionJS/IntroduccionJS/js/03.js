// Tipos de datos

// Undefined
let client;
console.log(client);

// Strings o cadenas de texto
const alumno = "Juan";
console.log(alumno);

const producto = 'Monitor';
console.log(producto)
console.log(typeof producto)

// Numbers

const numero = 10;
const numero2 = 30.2;
const numero3 = -19;

console.log(typeof numero)
console.log(typeof numero2)
console.log(typeof numero3)

// Big int

const numeroGrande = BigInt(19231923912391293129391239129319239123912391239)
console.log(typeof numeroGrande)
console.log(numeroGrande)

// Boolean
const bandera = false;
const bandera2 = true;

console.log(typeof bandera)
console.log(bandera2)

// Null

const descuento = null
console.log(descuento)

// Symbol
// Siempre son diferentes, aunque tengan el mismo valor

const primerSimbol = Symbol(30)
const segundoSimbol = Symbol(30)

console.log(primerSimbol)
console.log(segundoSimbol)
console.log(typeof primerSimbol)
console.log(primerSimbol === segundoSimbol)