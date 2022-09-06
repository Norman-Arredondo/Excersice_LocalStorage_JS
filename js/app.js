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
        tweets = JSON.parse( localStorage.getItem('tweets')) || [] ;

        console.log(tweets);

        crearHTML();
    })
}



/**Funciones */
// Añadier tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    
    // Textarea donde el usuario escribe. Leer el valor del text area
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

            // Agregar un btn de eliminar 
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet'); // Puede ser .classList.add('')
            btnEliminar.innerText = 'X'; // Puede ser .innerText

            // Aadier la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear HTML. Crear elemento y añadirle el contenido a la lista
            const li = document.createElement('li');
            // añadir Texto
            li.innerText = tweet.tweet;

            // Asignar el botón de borrar a tweet
            li.appendChild(btnEliminar);
            // insertar en el html. Añade el tweet a la lista
            listaTweets.appendChild(li); // no limpia el código previo
        });
    }

    sincronizarStorage();

}

// Agrega los tweets actuales a LocalStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina un Tweet
function borrarTweet( id ) {
    tweets = tweets.filter( tweet => tweet.id !== id); // Nos traemos todos, excepto al que le dimos click

    crearHTML(); // Para refrescar
}

// Limpiar el HTM
function limpiarHTML() {
    // Mientras haya elementos
    while( listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

