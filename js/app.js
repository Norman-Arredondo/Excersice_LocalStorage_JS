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
    console.log('Agregando Tweet');
}