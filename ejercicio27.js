/*
Enunciado Ejercicio  27
Dado un numero , mostrar a cuantos años,meses y dias equivalen
*/

function calcularDias(numero){
    
    let años = Math.floor(numero/365);
    let dias_restante = (numero%365);

    let meses = Math.floor(dias_restante/30);
    dias_restante = dias_restante%30;

    return `Equivale a ${años} años, ${meses}meses y ${dias_restante}dias`;

}


console.log(calcularDias(920));