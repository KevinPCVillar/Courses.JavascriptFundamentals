// Modules, debes declarar el archivo tipo module para poder hacer importaciones
import  funcionMultiplicar, { sumar as funcionSumar, restar as funcionRestar, dividir as funcionDividir} from './funciones.js' 

const resultado = funcionSumar(10,20)
const resultado2 = funcionRestar(10,20)
const resultado3 = funcionMultiplicar(10,20)
const resultado4 = funcionDividir(10,20)

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);