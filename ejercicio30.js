/*
Enunciado Ejercicio  30
Dado un array de numeros , devolver el array sin elementos duplicados.
si hay un string eliminarlo del array.


Ejemplo:
elimiarDuplicados([1,2,1,1,1,3,4]); // Devuelve: [1,2,3,4]

*/

function elimiarDuplicados(elementos){
    elementos = elementos.filter(elemento =>{
        return typeof elemento === "number";
    });
    let sin_duplicados = new Set(elementos);
    return  Array.from(sin_duplicados);
}

console.log(elimiarDuplicados([1,2,1,1,1,3,4]));
