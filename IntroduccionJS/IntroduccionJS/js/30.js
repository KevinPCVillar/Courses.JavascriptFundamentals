// Eventos del DOM - Clicks

const heading = document.querySelector(".heading") // Retorna solo un elemento
const enlaces = document.querySelectorAll('.navegacion a')

heading.addEventListener('mouseenter', () => {
    heading.textContent = 'Nuevo header al dar click'
})
heading.addEventListener('mouseleave', () => {
    heading.textContent = 'Saliendo...'
})

enlaces.forEach(e => {
    e.addEventListener('click', (event) => {
        event.preventDefault()
        console.log(event);
        console.log('Diste click en un enlace');
        event.target.textContent = 'Diste click...'
    })
})