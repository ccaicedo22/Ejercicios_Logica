/*
Enunciado Ejercicio  46
Dado un string,devolver todos los posibles substrings
*/

function todosSubStrings(palabra){

    let substrings = [];

    for(letra in palabra){
        let comienzo = parseInt(letra);

        for(let i=0; i<= palabra.length - comienzo; i++){
            let final = parseInt(i) + parseInt(comienzo);

            substrings.push(palabra.substring(comienzo,final));
        }

    }
    return substrings.filter(elemento => elemento.length >= 1);

}

console.log(todosSubStrings("Hola"))