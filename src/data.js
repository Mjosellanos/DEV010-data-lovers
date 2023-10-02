// estas funciones son de ejemplo
import data from './data/rickandmorty/rickandmorty.js';
function Ordenar(data) {
  /* se crea una funcion llamada ordenar y recibe un parametro que es llamado "data"
  estose encarga de ordenar cada elemento de data si no estoy mal y deberia retonar un arreglo ordenado*/
  const ordenado = data.results.sort(function (a, b) {
    /*  en esta linea lo que se quizo hacer es  */
    //console.log(a,b)

    return a.name.localeCompare(b.name);
  });
  return ordenado;
}

export {
  Ordenar
}

function filtrarNombre(nombre, Data) {


  const resultado = Data.results.filter((personaje) => personaje.name.toLowerCase().includes(nombre.toLowerCase()));
  return resultado;

}
export { filtrarNombre };


function filtrarTemporada(especie) {

  const resultado = data.results.filter((personaje) => personaje.species.includes(especie));
  return resultado;
}
export { filtrarTemporada }

function filtrarUbicacion(genero) {

  const resultado = data.results.filter((personaje) => personaje.gender.toLowerCase().includes(genero));
  return resultado;

}
export { filtrarUbicacion }


function filtrarOtros(estado) {

  const resultado = data.results.filter((personaje) => personaje.status.includes(estado));
  return resultado;
}
export { filtrarOtros }


