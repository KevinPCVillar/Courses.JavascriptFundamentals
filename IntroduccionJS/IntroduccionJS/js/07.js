// Mezclar objetos

const producto = {
    nombre: "Tablet",
    precio: 100,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true,
}

const carrito = {
    cantidad: 1,
    ...producto // spread operator
}

console.log(carrito.precio)

const nuevoObjeto = {
    ...producto,
    ...cliente
}

console.log(nuevoObjeto)

const nuevoObjeto2 = Object.assign(producto, cliente)
console.log(nuevoObjeto2)