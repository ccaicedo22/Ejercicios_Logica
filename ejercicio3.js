/*
Enunciado Ejercicio 3
Dada una palabra ,buscarla en una frase y devolver cuantas veces apararece en ella.
en la frase y la palabra deben ser parametros de una funcion

Ejemplos:
coincidencias("hola soy una palabra en una frase,.PALABRA.","palabra")//Devuelve : 2
coincidencias("soy la frase","carlos")// Devuelve : 0
*/


function coincidencias(frase,busqueda){

    let texto_limpio = frase.toLowerCase().replace(/[¡!.,-]/gi,'');
    let resultado = 0;

    if(texto_limpio.includes(busqueda)){
        let palabras = texto_limpio.split(" ");
        let mapa = {};

        for(let palabra of palabras){

            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[busqueda];

    }else{
        resultado = 0;
    }
    return resultado;
}

console.log(
    "Número de coincidencias en la frase: ",
coincidencias("hola que tal, soy carlos caicedo. carlos","carlos")
);












