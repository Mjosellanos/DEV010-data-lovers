import { Ordenar, filtrarNombre, filtrarUbicacion, filtrarOtros } from '../src/data.js';

/* estos codigo son unas pruebas para verificar  si cada 
funcion  filtra o ordena de la manera correcta*/

describe('ordenar la data', () => {
  it('Deberia ser function', () => {
    expect(typeof Ordenar).toBe('function');
  });
  /* verifica si ordenar es tipo funcion,
  la funcion debe de devolver un array de objetos*/

  it('ordenar de la a a la z`', () => {
    const data = {

      results: [
        { "name": "Fat Morty" },
        { "name": "Zick Zack" },
        { "name": "Baby Rick" },
        { "name": "Alexander" },
      ]
    }

    expect(Ordenar(data)).toEqual([{ "name": "Alexander" }, { "name": "Baby Rick" }, { "name": "Fat Morty" }, { "name": "Zick Zack" }]);
  });
});


describe('filtra los nombres', () => {
  it('debe filtrar', () => {
    expect(typeof filtrarNombre).toBe('function');
  });

  it('debe retornar`Fat Morty', () => {
    const nom = "Morty"

    const dat = {
      results: [
        { "name": "Fat Morty" },
        { "name": "Zick Zack" },
        { "name": "Baby Rick" },
        { "name": "Alexander" },
      ]

    }
    expect(filtrarNombre(nom, dat)).toEqual([{ "name": "Fat Morty" }]);


  });
});

describe('filtra los generos', () => {
  it('debe filtrar', () => {
    expect(typeof filtrarUbicacion).toBe('function');
  });

  it('debe retornar`el genero', () => {
    const nom = "Morty"

    const dat = {
      results: [
        { "name": "Fat Morty" },
        { "name": "Zick Zack" },
        { "name": "Baby Rick" },
        { "name": "Alexander" },
      ]

    }
    expect(filtrarNombre(nom, dat)).toEqual([{ "name": "Fat Morty" }]);


  });
});

describe('filtra el estado', () => {
  it('debe filtrar', () => {
    expect(typeof filtrarOtros).toBe('function');
  });

  it('debe retornar`el estado', () => {
    //const esta = "Alive"

    const dat = {
      results: [
        { "status": "Alive" },
        { "status": "unknown" },
      ]

    }
    expect(filtrarOtros(dat)).toEqual([{ "status": "Alive" }, { "status": "unknown" }]);


  });
}); 