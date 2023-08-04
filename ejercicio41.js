/*
Enunciado Ejercicio  41
Dado un numero,mostrar un triangulo  de asteriscos * con ese numero de filas
*/

function triangulo(numero){
    let mitad = Math.floor(numero - 1);
    //bucle total filas
    for(let fila = 0; fila < numero ; fila++){
        let nivel = "";
            //bucle para pintar asteriscos y espacios
            for(let columna =0; columna < (2 * numero - 1) ; columna++){
                if(mitad -  fila <= columna && mitad + fila >= columna){
                    nivel += "*";
                }else{
                    nivel += " ";
                }
            }

            console.log(nivel);
    }
}



triangulo(4)


