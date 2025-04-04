// Array Methods

const tecnologias = ['HTML', 'CSS', 'Javascript']
const numeros = [1, 2, 3, 4, 5]

const nuevoArray = tecnologias.filter(tech => tech !== 'HTML')

console.log(nuevoArray);

const resultado = numeros.filter(n => n !== 1)
console.log(resultado);

// Includes
const resultados = tecnologias.includes('React')
console.log(resultados);

// Some - Devuleve si al menos uno cumple la condicion, un booleano
// Es un Any de LINQ
const someResul = numeros.some(n => n > 10)
if (someResul)
    console.log('Si hay elementos mayores a 10');
else
    console.log('No hay elementos mayores a 10');

// Find - Devuelve el primer elemento que cumple la condicion, es un FirstOrDefault
const first = numeros.find(n => n > 1)
console.log(first);

// Every - Retorna true o false, si todos cumplen la condicion , es un All
const every = numeros.every(n => n > 1)
console.log(every);

// Reduce - Retorna un acumulado del total, es un Sum
const reduce = numeros.reduce((total, numero) => total + numero, 0)
console.log(reduce);