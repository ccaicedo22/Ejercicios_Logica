/*
Enunciado Ejercicio 11
Dado un texto y una busqueda, censurar todas las coincidencias
de la busqueda en el texto con [-CENSURADO-].


si texto o busqueda estan vacio mostrar
"No puedes leer el texto y la busqueda" en el caso de que ambos
parametros no lleguen.

*/

function censurado(texto=false,busqueda=false){
    let resultado ="";

    if(!texto && !busqueda){
        resultado = "No puedes leer el texto y la busqueda";
    }else if(!texto && busqueda){
        resultado = "No puedes leer el texto";
    }else if(texto && !busqueda){
        resultado = "No puedes hacer la busqueda";
    }else if(texto && busqueda){
        resultado = texto.replace(new RegExp(busqueda,'gi'), "[-CENSURADO-]");
    }
    return resultado;
}

console.log(censurado("hola4 hola carlos hola","hola"));