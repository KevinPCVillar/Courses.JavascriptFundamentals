// Optional chaning ?
const alumno = {
    nombre: 'Juan',
    clase: 'Programacion',
    aprobado: true
}

console.log(alumno.examenes?.examen1);
console.log("Despues de alumno");


// Nulish coalesing operator ??

const pagina = null ?? 1
console.log(pagina);