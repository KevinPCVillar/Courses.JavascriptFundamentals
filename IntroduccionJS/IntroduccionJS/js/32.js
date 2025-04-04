// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Enviando formulario..');

    const nombre = document.querySelector('#nombre').value
    const pass = document.querySelector('#password').value

    const alertaPrevia = document.querySelector('.alerta')
    alertaPrevia?.remove()

    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta','text-white','uppercase','text-sm','text-center','p-2','font-black')
    alerta.textContent = 'Contenido de Alerta'
    console.log(alerta);
    
    console.log(nombre);
    console.log(pass);
    
    if(nombre === '' || pass === ''){
        console.log('LLena los campos');
        alerta.classList.add('bg-red-500')
        alerta.textContent = 'LLena los campos'
    }else{
        console.log('Iniciando sesion...');
        alerta.classList.add('bg-green-500')
        alerta.textContent = 'Inciando sesion...'
    }

    formulario.appendChild(alerta)

    setTimeout(() => {
        alerta.remove()
    }, 3000);
})