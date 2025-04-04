// Condiciones

const disponible = 200
const retirar = 200

const auth = true

if (auth) {
    console.log('Acceso al sistema');
} else {
    console.log('No tienes permiso');
}

if (disponible >= retirar)
    console.log('Si puedes retirar');
else {
    console.log('Saldo insuficiente');
}