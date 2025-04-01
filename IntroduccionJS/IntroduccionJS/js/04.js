// Objetos

const producto = {
    nombre: "Tablet",
    precio: 100,
    disponible: true
}

console.log(producto);
console.table(producto)

console.log(producto.nombre)

// Descructuring

const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(nombre);
console.log(disponible);

// Object literal enhancment
// Aplica cuando los campos se llaman igual

const autenticado = true;
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto)