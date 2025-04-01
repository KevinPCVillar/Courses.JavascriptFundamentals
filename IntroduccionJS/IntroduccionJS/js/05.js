// Objetos - Manipulación

const producto = {
    nombre: "Tablet",
    precio: 100,
    disponible: true
}


// Congelas el objeto para no poder modificarlo
//Object.freeze(producto)

// Permite modificacion mas no insercion ni eliminacion
//Object.seal(producto)

//Rescribir valor
producto.disponible = false
console.log(producto)

//Anadir nuevo valor
producto.imagen = 'imagen.jpg'

// Eliminar propiedad

delete producto.precio

console.log(producto)