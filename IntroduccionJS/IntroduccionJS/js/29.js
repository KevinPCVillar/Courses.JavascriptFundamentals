// Manipular elementos HTML con CSS

const heading = document.querySelector(".heading") // Retorna solo un elemento
const enlaces = document.querySelectorAll('.navegacion a') // Retorna todos los elementos que coincidan

heading.textContent = 'Un nuevo heading...'
heading.id = 'Un nuevo ID'

//heading.removeAttribute('class')

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Nuevo valor'

enlaces[0].textContent = 'Dummy Enlace'

enlaces.forEach(enlace => enlace.textContent = 'Nuevo enlace')