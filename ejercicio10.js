/*
Enunciado Ejercicio 10
Dado un numero, mostrar una escalera con escalones de "[-]" usando el numero para los niveles
de la escalera

Ejemplos:
escalera(4) //Devuelve:


[-]
[-][-]
[-][-][-]
[-][-][-][-]
*/


function escalera(numero ){
    let escalera_completa = "";
    for (let nivel=1 ;nivel<=numero;nivel++){
        let escalones = "";
        for(let escalon = 1;escalon<=nivel;escalon++){
            escalones += "[-]";
        }

        escalera_completa += escalones + '\n';
    }
    
    return escalera_completa;

}

console.log(escalera(5));