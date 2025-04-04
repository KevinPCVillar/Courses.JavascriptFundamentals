// Condiciones OR y AND

const disponible = 1000
const retirar = 1200
const tarjeta = true

// || OR - Al menos una condición se cumple
// && AND - Todas las condiciones se cumplen
if (disponible > retirar || tarjeta)
    console.log('Puedes pagar');
else
    console.log('No puedes pagar');