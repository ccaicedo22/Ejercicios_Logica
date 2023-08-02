/*
Enunciado Ejercicio  36
Dado un texto,devolver cuantas consonantes y cuantas vocales tiene
*/

function cuantaLetras(texto){
    let consonantes = 0, vocales = 0, texto_limpio = "";

    texto_limpio = texto.split("")
                        .filter(letra => /[\w]/gi.test(letra) && isNaN(letra))
                        .join("");

    for(let letra of texto_limpio){
        if(/[aeiou]/gi.test(letra)){
            vocales++;
        }else{
            consonantes++;
        }
    }

    return [vocales,consonantes];
}

console.log(cuantaLetras("holamundo"));