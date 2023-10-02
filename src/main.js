/* Recomendamos usar src/main.js para todo tu código que
tenga que ver con mostrar los datos en la pantalla.
Con esto nos referimos básicamente a la interacción con
el DOM. Operaciones como creación de nodos, registro
de manejadores de eventos (event listeners o event handlers) */
import { filtrarOtros, filtrarUbicacion, filtrarTemporada, filtrarNombre, Ordenar } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

const container = document.querySelector('.container');
/* es una variable llamada "container" y me trae con el querySelector un elemento
del HTML que se llame "container" */
function dibujar(personajes) {
  /* esta funcion recibe un arreglo de personajes, */
  container.innerHTML = '';  /* innerHTML  es una propiedad de los elementos del DOM en JavaScript
                             que permite acceder y modificar el contenido HTML dentro de un elemento. */
  /* no me queda muy claro para que sirve este codigo "container.innerHTML = '';" */
  for (let i = 0; i < personajes.length; i++) {
    const character = personajes[i];
    /*  en este codigo utilizo un bucle for para iterar el arreglo llamado "personajes"
    
    */
    container.innerHTML +=
      /* por lo que entiendo es que dentro de este bucle for se esta creando una cadena donde estamos
      utilizando ${} que se puede decir que es una plantilla donde nos esta mostrando
      informacion de los personajes como, los nombres, las imagenes, el estado, el genero, la especie
      su origen y ubicacion */
      `<div class="card">
      <div class="imgBox">
        <img src="${character.image}" alt="${character.name}">
      </div>
      <div class="content">
        <h2>${character.name}</h2>
        <p>
          Status: ${character.status}<br>w
          Species: ${character.species}<br>
          Type: ${character.type}<br>
          Gender: ${character.gender}<br>
          Origin: ${character.origin.name}<br>
          Location: ${character.location.name}<br>
          Episodes: ${character.episode.length}<br>
        </p>
      </div>
      </div>`;
    /*  El signo "${}" se utiliza para insertar variables dentro de una cadena de texto.
     Esto es conocido como "Template Literals" en JavaScript 
    y permite crear cadenas de texto más legibles y fáciles de mantener.*/
  }
}
dibujar(data.results)

/********FILTRO**********/
// Taer el  del DOM (getElementByID 0 querySelector) 
const select = document.getElementById('personajes')
// Añadir observador al select (addEventListener)
select.addEventListener('change', (event) => {
  /* el  addEventListener lo que hara es que el event se ejecutara 
  cada vez que se produzca el evento en el primer argumento que este caso seria'change' */

  // Mostar el value en  consola
  //console.log(event.target.value) /// data.results aplicarle el metodo filter de JS 

  const selectedValue = event.target.value;
  /* en esta linea lo que estoy haciendo es darle valor al select y para especificar mas
  el event: permite que produzca un evento, como darle click a algun boton o algo asi,
  en pocas palabras esta linea de este  codigo lo que hace es que obtiene la informacion que el usuario hace.
   */
  const resultado = filtrarNombre(selectedValue, data)
  /*  lo que hace el filtrarNombre es: filtrar el valor seleccionado por el usuario, en este caso 
  el valor a filtrar serian los nombres*/
  
  /*  console.log(data.results) */
  // console.log (resultado);
  dibujar(resultado)

})


const filtro = document.getElementById('temporadas')
// Añadir observador al select (addEventListener)
filtro.addEventListener('change', (event) => {
  // Mostar el value en consola
  //console.log(event.target.value) // // data.results aplicarle el metodo filter de JS 

  const selectedValue = event.target.value
  const resultado = filtrarTemporada(selectedValue)
  //console.log(event.target.value)

  //console.log(data.results) 
  // console.log (resultado);
  dibujar(resultado)


})

const filtrarGenero = document.getElementById('ubicacion')
// Añadir observador al select (addEventListener)
filtrarGenero.addEventListener('change', (event) => {
  // Mostar el value en consola
  //console.log(event.target.value) // // data.results aplicarle el metodo filter de JS 
  const selectedValue = event.target.value
  const resultado = filtrarUbicacion(selectedValue)
  //console.log(event.target.value)
  //console.log(data.results)

  //console.log(resultado);
  dibujar(resultado)


})

const filStatus = document.getElementById('otros')
// Añadir observador al select (addEventListener)
filStatus.addEventListener('change', (event) => {
  // Mostar el value en consola
  //console.log(event.target.value) // // data.results aplicarle el metodo filter de JS 

  const selectedValue = event.target.value
  const resultado = filtrarOtros(selectedValue)
  // console.log(event.target.value)

  //console.log(data.results)


  //console.log(resultado);
  dibujar(resultado)


})
const botonOrdenar = document.getElementById('Ordenar');

// Agrega un evento clic al botón
botonOrdenar.addEventListener('click', function () {

  const resOrdenado = Ordenar()

  dibujar(resOrdenado);
});
//function dibujar(resultados)






