/*
Enunciado Ejercicio 1
Dado un número, devolver su tabla de multiplicar completa
*/

function tablamultiplicar(numero){
    let resultado ="# Tabla del"+numero+" #\n ";

    for(let i=1;i<=10; i++){
        let multiplicacion = (i*numero);

        resultado += `${i} x ${numero} = ${multiplicacion} \n`;
        
    }
    return resultado;
}

console.log(tablamultiplicar(6));