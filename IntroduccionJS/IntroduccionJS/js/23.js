// Shortcircuit &&
// Evalua la primera expresion y hace la segunda instruccion

const auth = true

if(40){
    console.log('True');
}else{
    console.log('False');
}

auth && console.log('Usuario Autenticado');