const tecnologias = ['HTML', 'CSS', 'Javascript']
tecnologias.push('React')
console.table(tecnologias)

const nuevoArreglo = [...tecnologias, 'Nest.js']
nuevoArreglo.shift()
console.log(nuevoArreglo);

// Filtrar elementos de un arreglo
const tecnologias2 = tecnologias.filter(function(a) { // Array que cumple con la condicion dada
    if (a !== 'HTML') {
        console.log(a); // Entidad
        return a;
    }
})
console.log(tecnologias2);

// Modificar elementos sin afectar el array original
const tecnologias3 = tecnologias.map(function(a) { // Array que cumple con la condicion dada
    if (a === 'Javascript') {
        return 'Node.js'
    } else
        return a
})

console.log(tecnologias3);