// Destructuring de dos o mas objetos

const producto = {
    nombre: "Tablet",
    precio: 100,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true,
    direccion: {
        calle: "Calle Mexico",
        codigoPostal: {
            numero: 10
        }
    }
}

const { nombre } = producto
const { nombre: nombreCliente, direccion: { calle } } = cliente
const { codigoPostal: { numero } } = cliente.direccion;

console.log(nombre)
console.log(nombreCliente)
console.log(calle)
console.log(cliente.direccion.codigoPostal.numero)
console.log(numero)