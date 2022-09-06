/** Variables */
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = []; // Almacena todos los tweets

/** Event Listeners */
eventListeners(); // Para registrar nuestros events Lis

function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets') || [] );

        console.log(tweets);

        crearHTML();
    })
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

    const tweetObj = {
        id: Date.now(),
        tweet // En un ojeto cuando llave y valor se llaman igual,
    }

    // Añadir al arreglo de tweets 
    tweets = [...tweets, tweetObj]; // Una copia el arreglo y agregamos el tweet

    // Una vez creado vamos a crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();

    
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


// Muestra un listado de los tweets

function crearHTML() {
    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            // Crear HTML
            const li = document.createElement('li');

            // añadir Texto
            li.innerText = tweet.tweet;

            // insertar en el html
            listaTweets.appendChild(li); // no limpia el código previo
        });
    }

    sincronizarStorage();

}

// Agrega los tweets actuales a LocalStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Limpiar el HTM
function limpiarHTML() {
    // Mientras haya elementos
    while( listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

