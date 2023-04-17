let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];

//Añado un elemento al final del array
seriesPending.push('Modern Family');

//Recorro el array
for (let i = 0; i < seriesPending.length; i++) {
  //i es el índice. [i] nos dará el elemento en esa posición
    console.log(`Serie #${i}: ${seriesPending[i]}`);
    if (seriesPending[i] === 'Boolean 99'){
    console.log("Found it!");
    }
}

//Inicializamos un array vacío
let seriesWatching= [];

//Eliminamos el primer elemento del array "seriesPending" y lo añadimos al final del array "seriesWatching"
seriesWatching.push(seriesPending.shift());

//Comprobamos que lo hemos hecho bien
console.log(seriesWatching);
console.log(seriesPending);

//Vemos la longitud de los arrays
console.log("La longitud del array de seriesPending es: " + seriesPending.length);
console.log("La longitud del array de seriesWatching es: " + seriesWatching.length);

//Movemos todas las series a "seriesWatching" de la misma manera que hicimos antes
for (let i = 0; i < 4; i++) {
    seriesWatching.push(seriesPending.shift())
}

//Volvemos a ver la longitud de los arrays
console.log("La longitud del array de seriesPending ahora es: " + seriesPending.length);
console.log("La longitud del array de seriesWatching ahora es: " + seriesWatching.length);

//Eliminamos todos los elementos de "seriesWatching"
seriesWatching.splice(0, seriesWatching.length);

//Volvemos a ver la longitud de los arrays
console.log("La longitud del array de seriesPending finalmente es: " + seriesPending.length);
console.log("La longitud del array de seriesWatching finalmente es: " + seriesWatching.length);