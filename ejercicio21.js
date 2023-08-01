/*
Enunciado Ejercicio  21
Dado una cadena de texto y un numero , recirtar el string
mostrando los X primeros caracteres.

Ejemplos:
recortar('cursos de programacion',6) //Devuelve: 'cursos'
*/


function recortar(texto,hasta){
    let resultado = "";

    if(typeof texto === 'string' && typeof hasta === 'number'){
        resultado = texto.substring(0,hasta);
    }else{
        resultado = "Introduce bien los datos !!";
    }

    return resultado;

}


console.log(recortar('cursos de programacion',6));
