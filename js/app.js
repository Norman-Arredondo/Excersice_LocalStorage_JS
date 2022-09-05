/** Variables */
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = []; // Almacena todos los tweets

/** Event Listeners */
eventListeners(); // Para registrar nuestros events Lis

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}



/**Funciones */

function agregarTweet(e) {
    e.preventDefault();
    
    // Textarea donde el usuario escribe 
    const tweet = document.querySelector('#tweet').value; // Una vez que se presione submit, se lee el valor del tweet

    // Validación... 

    if(tweet === '') {
        mostrarError('Un tweet no puede ir vacío');
        return; // Evita que se ejecuten más líneas de código. Funciona en un if si está en una función
    }

    console.log('agregando tweet');
    
}

// Mostrar mensaje de error
function mostrarError( error ) {
    // HTML con scripting
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error'); //Clase de CSS

    // Insertarlo arriba del contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout (() => {
        mensajeError.remove();
    },2000);
}