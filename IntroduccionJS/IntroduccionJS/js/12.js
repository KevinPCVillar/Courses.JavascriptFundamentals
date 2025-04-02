// Iteracion de arrays

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js']

// For 
for (let i = 0; i < tecnologias.length; i++) {
    console.log(tecnologias[i]);
}

// Foreach
// Solo itera, no regresa valores
tecnologias.forEach(element => {
    console.log(element);
});

// map
// Este si te regresa un arreglo nuevo que puedes asignar a una variable
// Puedes modificar el arreglo original dependiendo de la logica
const newArray = tecnologias.map(function(tech) {
    return tech;
});

console.log(newArray);


// for ... of

for (let tech of tecnologias) {
    console.log(tech);
}